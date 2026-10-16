@echo off
powershell -NoProfile -Command ^
    "Get-ChildItem -File | ForEach-Object { " ^
        "$old = $_.Name; " ^
        "$base = $_.BaseName.ToLower() -replace '[\(\)\+]', '' -replace '[\s\-\u2013\u2014]+', '_'; " ^
        "$ext = $_.Extension.ToLower(); " ^
        "$new = ($base -replace '_+', '_').Trim('_') + $ext; " ^
        "if ($old -cne $new) { " ^
            "Write-Host ('Renaming: ' + $old + ' -> ' + $new); " ^
            "Rename-Item -LiteralPath $_.FullName -NewName $new " ^
        "} " ^
    "}"
pause