import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wmddzzuftfwnqnqpzcaq.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)



export async function fetchData() {
    const { data, error } = await supabase.from('People').select();
    if (error) {
        console.error('Error fetching data:', error.message);
    } else {
        console.log('Fetched data:', data);
        // Do something with the fetched data, e.g., update the UI
    }
}



document.querySelector('submit').addEventListener('click', fetchData);

//const button = document.getElementById('submit');
//button.addEventListener('click', fetchData);
