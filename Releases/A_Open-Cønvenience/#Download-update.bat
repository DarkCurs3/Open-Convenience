@echo on
echo We need to do :powershell Set-ExecutionPolicy Unrestricted: to run the scripts; the script will download a script to re-enable this security at the end of the job
echo if you didnt, run as administrator

powershell Set-ExecutionPolicy Unrestricted


echo Will execute 'powershell #Download-update.bat.ps1'

powershell " .\#\Download-update.bat.ps1"
powershell " .\#\Download-Yabber.ps1"
powershell " .\#\Download-UXM.ps1"

exit