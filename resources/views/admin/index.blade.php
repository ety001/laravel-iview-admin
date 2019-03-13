<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" api_token="{{ \Auth::check() ? 'Bearer ' . \Auth::user()->api_token : 'Bearer '  }}">
    <link rel="stylesheet" href="{{ mix('static/admin.css') }}">
    <!-- <script src="{{ asset('/js/tinymce.min.js') }}"></script> -->
</head>
<body>
<div id="app"></div>

<script src="{{ mix('static/admin.js') }}"></script>
</body>
</html>
