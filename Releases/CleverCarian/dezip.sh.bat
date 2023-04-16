@echo off
:: Default Open-Convenience BAT;Params ::
title DeZip-Open_Convenience
echo Will unpack .zip's Files Assiociated with their .z0* files
echo Will unpack .zip's Files Assiociated with their .z0* files
echo [_____]
timeout 3
pause


:: use winrar and unpack everything ::
winrar x -ibck *.zip
echo Everything was unpacked succesfully!
echo Everything was unpacked succesfully!
echo [==___]
timeout 5
Open-Convenience;DeZip;Cleaner.sh.bat

echo Deleting .z0* and .zip files littering around 
echo Deleting .z0* and .zip files littering around 
echo [====_]
timeout 9

