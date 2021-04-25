$path = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $path

$name = Join-Path $path "LandingCraft.txt"
$readFile = New-Object System.IO.StreamReader($name, [System.Text.Encoding]::GetEncoding("utf-8"))
$name = Join-Path $path "ship_LandingCraft.js"
$writeFile = New-Object System.IO.StreamWriter($name, $false, [System.Text.Encoding]::GetEncoding("utf-8"))

$writeFile.WriteLine("load(`"script/utils.js`");")
$writeFile.WriteLine("function header()")
$writeFile.WriteLine("{")
$writeFile.WriteLine("`treturn [`"大発`"];")
$writeFile.WriteLine("}")
$writeFile.WriteLine("function begin(specdiff) { }")
$writeFile.WriteLine("function body(ship)")
$writeFile.WriteLine("{")
$writeFile.WriteLine("`tvar s = `"××`";")
$writeFile.WriteLine("`tvar name = ship.name;")
$writeFile.WriteLine("`tswitch (name)")
$writeFile.WriteLine("`t{")

$tmp = ""
while ($null -ne ($line = $readFile.ReadLine())) {
    $cell = ($tmp + $line).Split("`t")
    if ($cell.Length -eq 1) {
        $tmp += $Line + " "
    } else {
        $tmp = ""
        if ($cell.Length -eq 5 -or ($cell.Length -eq 4 -and $cell[3] -ne "編集" )) {
            $writeFile.WriteLine("`t`t// " + $cell[0])
            $s1 = $cell[1]
            $s2 = $cell[2] + $cell[3]
        } else {
            $s1 = $cell[0]
            $s2 = $cell[1] + $cell[2]
        }
        $n = ""
        foreach($i in  $s1.Split("/") ){
            $writeFile.WriteLine("`t`tcase `"$n$i`":")
            if ($n -eq "") {
                $n = $i
            }
        }
        $writeFile.WriteLine("`t`t`t s = `"$s2`";")
        $writeFile.WriteLine("`t`t`t break;")
    }
}
$writeFile.WriteLine("`t}")
$writeFile.WriteLine("`treturn toComparable([s]);")
$writeFile.WriteLine("}")
$writeFile.WriteLine("function end() { }")

$readFile.Close()
$writeFile.Close()

# 終了
Write-Host("終了")
