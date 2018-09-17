$path = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $path

$name = Join-Path $path "ship.txt"
$readFile = New-Object System.IO.StreamReader($name, [System.Text.Encoding]::GetEncoding("utf-8"))
$name = Join-Path $path "wikiOrder.js"
$writeFile = New-Object System.IO.StreamWriter($name, $false, [System.Text.Encoding]::GetEncoding("utf-8"))

$writeFile.WriteLine("function shipsList() {")
$writeFile.WriteLine("`tvar ships = [")
while ($null -ne ($line = $readFile.ReadLine())) {
    if ($line -match "^(.*)\s*Edit$") {
        $s = "`t`t// " + $Matches[1]
        $writeFile.WriteLine($s)
    }
    elseif ($line -match "▲|^\s*$") {
        # 処理無し
    }
    else {
        $s = [regex]::Replace($line, "\s*/\s*", "`", `"")
        $s = "`t`t`"" + $s.trim().trim("?") + "`","
        $writeFile.WriteLine($s)
    }
}
$writeFile.WriteLine("`t];")
$writeFile.WriteLine("`treturn ships")
$writeFile.WriteLine("}")

$readFile.Close()
$writeFile.Close()

# 終了
Write-Host("終了")
