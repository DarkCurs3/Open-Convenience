@echo off
:: Default Open-Convenience BAT;Params ::
title DeZip-Open_Convenience
timeout 3
pause


:: use winrar and unpack everything ::
echo Will unpack .zip's Files Assiociated with their .z0* files
echo Will unpack .zip's Files Assiociated with their .z0* files
winrar x -ibck *.zip
echo Everything was unpacked succesfully!
echo Everything was unpacked succesfully!
echo [==___]
timeout 5



echo Deleting .z0* and .zip files littering around 
echo Deleting .z0* and .zip files littering around 
echo [====_]
timeout 9

