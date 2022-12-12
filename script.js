// function showDropdownFeatures(x)
// {
//     document.getElementById('dropdownFeatures').style.display = 'block';
// }
// function hideDropdownFeatures(x)
// {
//     document.getElementById('dropdownFeatures').style.display = 'none';
// }
// function showDropdownCompany(x)
// {
//     document.getElementById('dropdownCompany').style.display = 'block';
// }
// function hideDropdownCompany(x)
// {
//     document.getElementById('dropdownCompany').style.display = 'none';
// }
let count = 0;
let secondCount = 0;
function clickFeatures()
{
    let icon = document.getElementById('icon');
    count = count + 1;
    if(count == 1)
    {
        document.getElementById('dropdownFeatures').style.display = 'block';
        
        icon.className = "fa-solid fa-chevron-up";
        count = -1;
    }
    else
    {
        document.getElementById('dropdownFeatures').style.display = 'none';
        icon.className = "fa-solid fa-chevron-down";
        count = 0;
    }
}
function clickCompany()
{
    let icon1 = document.getElementById('icon1');
    secondCount = secondCount + 1;
    if(secondCount == 1)
    {
        document.getElementById('dropdownCompany').style.display = 'block';
        
        icon1.className = "fa-solid fa-chevron-up";
        secondCount = -1;
    }
    else
    {
        document.getElementById('dropdownCompany').style.display = 'none';
        icon1.className = "fa-solid fa-chevron-down";
        secondCount = 0;
    }
}
let countMenu = 0;
function clickButton()
{
    let iconMenu = document.getElementById('iconMenu');
    countMenu++;
    if(countMenu == 1)
    {
        iconMenu.className = "fa-solid fa-xmark";
        iconMenu.style.transform = "scale(2,2)";
        document.getElementById('menu').style.display = 'block';
        document.getElementById('background').style.display = 'block';
        countMenu = -1;
    }
    else {
        iconMenu.className = "fa-solid fa-bars";
        document.getElementById('menu').style.display = 'none';
        document.getElementById('background').style.display = 'none';
        countMenu = 0;
    }
}