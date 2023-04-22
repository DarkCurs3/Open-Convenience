:: Yabber ::
echo Will mkdir 'Yabber/lib' and download 'Yabber' from Open-Convenience Github page
mkdir Yabber/lib
Invoke-WebRequest -Uri "https://github.com/brissonsean/Open-Convenience/raw/EldenRing/Releases/A_Open-C%C3%B8nvenience/Yabber/lib/oo2core_6_win64.dll" -OutFile "Yabber/lib/oo2core_6_win64.dll"
Invoke-WebRequest -Uri "https://github.com/brissonsean/Open-Convenience/raw/EldenRing/Releases/A_Open-C%C3%B8nvenience/Yabber/lib/SoulsFormats.dll" -OutFile "Yabber/lib/SoulsFormats.dll"
Invoke-WebRequest -Uri "https://github.com/brissonsean/Open-Convenience/raw/EldenRing/Releases/A_Open-C%C3%B8nvenience/Yabber/Yabber.Context.exe" -OutFile "Yabber/Yabber.Context.exe"
Invoke-WebRequest -Uri "https://github.com/brissonsean/Open-Convenience/raw/EldenRing/Releases/A_Open-C%C3%B8nvenience/Yabber/Yabber.Context.exe.config" -OutFile "Yabber/Yabber.Context.exe.config"
Invoke-WebRequest -Uri "https://github.com/brissonsean/Open-Convenience/raw/EldenRing/Releases/A_Open-C%C3%B8nvenience/Yabber/Yabber.DCX.exe" -OutFile "Yabber/Yabber.DCX.exe"
Invoke-WebRequest -Uri "https://github.com/brissonsean/Open-Convenience/raw/EldenRing/Releases/A_Open-C%C3%B8nvenience/Yabber/Yabber.DCX.exe.config" -OutFile "Yabber/Yabber.DCX.exe.config"
Invoke-WebRequest -Uri "https://github.com/brissonsean/Open-Convenience/raw/EldenRing/Releases/A_Open-C%C3%B8nvenience/Yabber/Yabber.exe" -OutFile "Yabber/Yabber.exe"
Invoke-WebRequest -Uri "https://github.com/brissonsean/Open-Convenience/raw/EldenRing/Releases/A_Open-C%C3%B8nvenience/Yabber/Yabber.exe.config" -OutFile "Yabber/Yabber.exe.config"
echo We are done! ☻ 

