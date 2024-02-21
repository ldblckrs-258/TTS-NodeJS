@echo off
call cd ../
call cd output
for /F "delims=" %%F in ('dir /B /O:N') do (
  set "latest_file=%%F"
)
start "" "%latest_file%"
exit