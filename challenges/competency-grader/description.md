## Introduction
Coders are to create a grader for various skillstrands in one competency.

## Knowledge Points
### First Level Challenge
In this challenge, coders will practice on ```computed()```, ```v-bind:style```, ```mounted()```, and asynchronized data request.

### Second Level Challenge
In this challenge, users will practice on ```localStorage``` and ```watch()```.

## Requirements
### Level 1
The corresponding demo gif file is called ```demo-1.gif```.

- Coders are to copy the folder ```template``` and rename the copied folder their own name. The HTML file and javascript file contain the basics for this challenge, including raw data, needed properties of the Vue instance, etc.
- Data is directly assigned to the vue property ```competencyData```. No changes to raw data are allowed.
- The webpage must contain a grader indicating the current grade for each skill strand. The grade may vary from 1 to 4. The corresponding button should turn blue if the user clicks on it. The user could also *deselect* or *cancel grading* the grade of the skill strand by reclicking on the current level button. This is shown in ```demo.gif```.
- Calculation of **average score**: the average score is the total level of skill strands divided by the number of skill strands **leveled**. The result is rounded to one decimal place. If the rounded result is an integer, the ```.0``` is not needed to be displayed (shown in ```demo.gif```).
- Calculation of **average grade**: when all **leveled** skill strands are at **level 1**, the grade is 60%; when all **leveled** skill strands are at **level 4**, the grade is 100%; when no skill strand is leveled, the grade is 0%; for other circumstances, the grade is calculated by evenly distributing the 40% (between 60% and 100%) to each increment on level.

  Example: There are four skillstrands present, and three of them are leveled as ```[3, 2, 2]```. If these three skill strands are leveled ```[1, 1, 1]```, the grade is 60%; if these three skill strands are leveled ```[4, 4, 4]```, the grade is 100%. Therefore there are ```(4-1) * 3 = 9``` levels between the grade 60% and the grade 100%, meaning every level has a weight of ```(100% - 60%) / 9 ≈ 4.4%```. In this case, ```[3, 2, 2]``` possess an increment of ```(3-1) + (2-1) + (2-1) = 4``` levels compared to ```[1, 1, 1]```. Therefore the grade is ```4 * 4.4% + 60% ≈ 77.8%```.

### Level 2
The corresponding demo gif file is called ```demo-2.gif```. This level is **based on Level 1**. Please first finish and pass the challenge of Level 1.

- Refreshing the webpage or closing the webpage should not clear the previous level data of the page. Changing a competency should clear the previous data of the page.

## Suggestions
- Try the extension in Visual Studio Code called **Live Server**. This supports hot reload, meaning you do not need to frequently refresh your page after making changes and saving the html, js, or css files. To use this extension, right click your html file in your vscode file browser and click **Open with Live Server**.
