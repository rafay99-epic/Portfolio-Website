Write-Host("Running the Portfolio-Website for The Author");

$OutputVariable = (git branch --show-current) | Out-String
if( $OutputVariable -eq "main" ) {
    Write-Host("On Main Branch");
    # Checking the Current Status
    git status
    # Getting from the main remote repo
    git pull

} else
{
    Write-Host("Not on master, it's the Development Branch");
    Write-Host("Running git commands");
    
    # Checking if the node modules are installed
    
    if (Test-Path -Path "node_modules") {
        Write-Host("Node Modules are installed");
    } else {
        Write-Host("Node Modules are not installed");
        Write-Host("Installing Node Modules");
        npm install
    }    

    git status
    git add *
    git commit -m 'Updating Files in Development Branch'
    git push
}
# else {
#     Write-Host("No Branch was Detected");
#     Write-Host("Please try Again")
# }

# Running the NodeJs server.
Write-Host("Running Node JS Serve");
npm start
