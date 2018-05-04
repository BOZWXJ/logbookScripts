$path = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $path

$name = Join-Path $path "ship.txt"
$readFile = New-Object System.IO.StreamReader($name, [System.Text.Encoding]::GetEncoding("utf-8"))
$name = Join-Path $path "wikiOrder.js"
$writeFile = New-Object System.IO.StreamWriter($name, $false, [System.Text.Encoding]::GetEncoding("utf-8"))

$s = "function shipsList() {`n`tvar ships = ["
$writeFile.WriteLine($s)
while (($line = $readFile.ReadLine()) -ne $null) {
    if ($line -match "^(.*)\s*Edit$") {
        $s = "`t`t// " + $Matches[1]
        $writeFile.WriteLine($s)
    }
    elseif ($line -match "▲|^\s*$") {
        # 処理無し
    }
    else {
        $s = [regex]::Replace($line, "\s*/\s*", "`", `"")
        $s = "`t`t`"" + $s.trim() + "`","
        $writeFile.WriteLine($s)
    }
}
$s = "`t];`n`treturn ships`n}"
$writeFile.WriteLine($s)

$readFile.Close()
$writeFile.Close()

# 終了
Write-Host("終了")
