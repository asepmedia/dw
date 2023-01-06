<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Dashboard Data Warehouse</title>

    <link async rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700,700i,800,900" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="{{ asset('js/app.js') }}" defer></script>

    <script>
        tailwind.config = {
            darkMode: 'class',
        }
    </script>

    <style>
        body {
            font-family: 'Nunito', sans-serif !important;
        }
    </style>
</head>
<body class="overflow-x-hidden">
    <div id="app">
        <dashboard-component></dashboard-component>
    </div>
</body>
</html>
