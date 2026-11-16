CREATE POLICY "Public can view Rivoningo media"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'rivoningo-media');