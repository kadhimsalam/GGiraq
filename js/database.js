const SUPABASE_URL = "https://bsfisveqboywdbvrcztj.supabase.co/rest/v1/";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzZmlzdmVxYm95d2RidnJjenRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3NDEyMDYsImV4cCI6MjA5OTMxNzIwNn0.1xQFEKdNpaz5osOHE1ri58RBnWLj1NB0F7nwEnoDI90";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
