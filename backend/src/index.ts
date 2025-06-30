import express from 'express';
import { PORT } from './utils/environment';
import supabase from './utils/database';

async function init() {
  console.log('Connecting to Supabase...');

  const { error } = await supabase.from('patients').select('id').limit(1);

  if (error) {
    console.log('❌ Not connected to Supabase!', error);
  } else {
    console.log('✅ Connected to Supabase!');
    const app = express();

    app.get('/', (req, res) => {
      res.status(200).json({
        message: 'Server is running',
        data: null,
      });
    });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  }
}

init();
