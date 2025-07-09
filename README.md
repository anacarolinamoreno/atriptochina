# A trip to China (from your pocket's point of view)
(May 2025)
<br>
*Warning: the data and the LLM prompts are in Portuguese, but you can survive this. They all got translated afterwards.*

### What is this project?
This is my first project for the Lede Data Journalism Program at Columbia University.

### Objective:
To catalog how much my mother and I spent on a vacation trip to China while I practice data wrangling and analysis (Python), data visualization (QGIS, Illustrator) and front-end development (HTML+CSS).

### Where did the idea come from?
On May 2025, my mother and I travelled around China. Before I went, a friend had asked me how much it costs to travel there. So I boarded the plane willing to find out.

### Steps:
1- From raw data to a dictionary with minimum typing
<br>
2- LLM fact-checking for accuracy
<br>
3- Data analysis
<br>
4- Dataviz
<br>
5- Webpage presentation

#### Step 1: from raw data to a dictionary with minimum typing
The source of the data is far from tidy and structured: a note I kept on my phone. Whenever there was a 15 minute gap in a car, train or airplane, I would write in Portuguse what we did, how much it cost and who paid for it (just to control the expenses from each paying source) for each day, and which city we were in that day.

It had only a minimum attention to stardards and highly subjected to my level of energy, memory and desire to keep track of our expenses ([see it for yourself here](00_raw/raw_data.txt)). But hey, at least it was digital text.

Because I wanted to practice dataviz, not data cleaning, I decided not to spend too much type coding my way from a crazy txt file into a Python dictionary. So, sticking with the theme, [I asked DeepSeek-R1 for help](01_prompt/prompt.md).

And [it pretty much worked](00_raw/china_raw.py)! I changed the name of the object from "gastos_viagem" to "expenses" and stored it into a .py file. Then I wised up and asked it to turn the dictionary [into a json file](00_raw/china_raw.json).
<br><br>
#### Step 2: LLM fact-checking for accuracy
After I got the raw data in the appropriated format, it was time to check its content. I chose to use pandas straight away. This is the [jupyter notebook for this step](03_notebooks/00_check.ipynb).
<br><br>
#### Step 3: Data cleaning and analysis
I moved on to [data cleaning](03_notebooks/01_data_cleaning.ipynb), which is when I decided to translate the entired content to English. This is [the cleaned CSV](04_tidy_data/china_cleaned.csv) that will serve as the source for the next step.

I analysed the tidy data according to five different angles:
<br>
--> General expenses
<br>
--> Comparing by city
<br>
--> Comparing by category
<br>
--> Comparing by payment type
<br>
--> Curious insights
<br>
Here's the [data analysis notebook](03_notebooks/02_data_analysis.ipynb). 
<br><br>
#### Step 4: Data visualization
In development, you can [see the storyboard here](05_dataviz/storyboard.md).
<br><br>
**Source of the spatial data:**
<br>
1- China outline map: [QGIS world database](https://www.youtube.com/watch?v=f4z7s93zlSQ)
<br>
2- Latitude and longitude of specific Chinese cities: [geojson.io](geojson.io)
<br>
3- China railway lines: [OpenStreetMap via HDX](https://data.humdata.org/dataset/hotosm_chn_railways)
<br><br>
#### Step 5: Final presentation
**Source of material:**
<br>
1- Icons: [SVG Repo](https://www.svgrepo.com/vectors/)
<br>
2- Photos and videos: personal archive

### What is this project?
This is my first project for the Lede Data Journalism Program at Columbia University.

### Objective:
To catalog how much my mother and I spent on a vacation trip to China while I practice data wrangling and analysis (Python), data visualization (QGIS, Illustrator) and front-end development (HTML+CSS).

### Where did the idea come from?
On May 2025, my mother and I travelled around China. Before I went, a friend had asked me how much it costs to travel there. So I boarded the plane willing to find out.

### Steps:
1- From raw data to a dictionary with minimum typing
<br>
2- LLM fact-checking for accuracy
<br>
3- Data analysis
<br>
4- Dataviz
<br>
5- Webpage presentation

#### Step 1: from raw data to a dictionary with minimum typing
The source of the data is far from tidy and structured: a note I kept on my phone. Whenever there was a 15 minute gap in a car, train or airplane, I would write in Portuguse what we did, how much it cost and who paid for it (just to control the expenses from each paying source) for each day, and which city we were in that day.

It had only a minimum attention to stardards and highly subjected to my level of energy, memory and desire to keep track of our expenses ([see it for yourself here](00_raw/raw_data.txt)). But hey, at least it was digital text.

Because I wanted to practice dataviz, not data cleaning, I decided not to spend too much type coding my way from a crazy txt file into a Python dictionary. So, sticking with the theme, [I asked DeepSeek-R1 for help](01_prompt/prompt.md).

And [it pretty much worked](00_raw/china_raw.py)! I changed the name of the object from "gastos_viagem" to "expenses" and stored it into a .py file. Then I wised up and asked it to turn the dictionary [into a json file](00_raw/china_raw.json).
<br><br>
#### Step 2: LLM fact-checking for accuracy
After I got the raw data in the appropriated format, it was time to check its content. I chose to use pandas straight away. This is the [jupyter notebook for this step](03_notebooks/00_check.ipynb).
<br><br>
#### Step 3: Data cleaning and analysis
I moved on to [data cleaning](03_notebooks/01_data_cleaning.ipynb), which is when I decided to translate the entired content to English. This is [the cleaned CSV](04_tidy_data/china_cleaned.csv) that will serve as the source for the next step.

I analysed the tidy data according to five different angles:
<br>
--> General expenses
<br>
--> Comparing by city
<br>
--> Comparing by category
<br>
--> Comparing by payment type
<br>
--> Curious insights
<br>
Here's the [data analysis notebook](03_notebooks/02_data_analysis.ipynb). 
<br><br>
#### Step 4: Data visualization
In development, you can [see the storyboard here](05_dataviz/storyboard.md).
<br><br>
**Source of the spatial data:**
<br>
1- China outline map: [QGIS world database](https://www.youtube.com/watch?v=f4z7s93zlSQ)
<br>
2- Latitude and longitude of specific Chinese cities: [geojson.io](geojson.io)
<br>
3- China railway lines: [OpenStreetMap via HDX](https://data.humdata.org/dataset/hotosm_chn_railways)
<br><br>
#### Step 5: Final presentation
**Source of material:**
<br>
1- Icons: [SVG Repo](https://www.svgrepo.com/vectors/)
<br>
2- Photos and videos: personal archive
