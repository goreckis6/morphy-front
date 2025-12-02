# Backend API Integration Check

## Important: Verify Your API Endpoint

Your backend API endpoint (`/api/preview/docx`) needs to use the `convert_docx_to_html_api` function from the updated `docx_to_html.py` file.

## Check Your API Endpoint

Make sure your Flask/FastAPI endpoint looks like this:

```python
from "viewers docx_to_html" import convert_docx_to_html_api

@app.route('/api/preview/docx', methods=['POST'])
def preview_docx():
    if 'file' not in request.files:
        return 'No file provided', 400
    
    file = request.files['file']
    if file.filename == '':
        return 'No file selected', 400
    
    # Save temporarily
    import tempfile
    import os
    temp_fd, temp_path = tempfile.mkstemp(suffix='.docx')
    try:
        file.save(temp_path)
        
        # Convert to HTML using the new function
        html_content = convert_docx_to_html_api(temp_path)
        
        # Return HTML (just content, no body/head tags)
        return html_content, 200, {'Content-Type': 'text/html; charset=utf-8'}
    finally:
        # Clean up
        os.close(temp_fd)
        if os.path.exists(temp_path):
            os.remove(temp_path)
```

## What the Backend Should Return

The backend should return **ONLY** the HTML content, without `<html>`, `<head>`, or `<body>` tags.

Example output:
```html
<h1>Title</h1>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<table>...</table>
```

NOT:
```html
<html><body><h1>Title</h1>...</body></html>
```

## Testing

1. Check browser console for logs showing:
   - "Backend response length: X"
   - "Extracted body content length: X"
   - "Found X block elements"
   - "Split into X A4 pages"

2. If you see "Split into 1 A4 pages" for a long document, the splitting isn't working.

3. Check the Network tab to see what the backend actually returns.

