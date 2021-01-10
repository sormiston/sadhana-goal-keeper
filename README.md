# sadhana-goal-keeper

# MINTBEAN GOAL TRACKER HACKATHON

## MVP

Core CRUD and query functionality of TODO items
| Feature  | Implementation  | MSCW |
|---|---|----|
| I can (CRUD) Create, Read, Update, and Delete todo items | Axios CRUD to firebas backend | M
| I can add a title(required) and a body(optional) to a todo item | limit body description to 2 lines; motivational description | M 
|I can add hashtags to any todo item| " | M
|I can perform a text-based search that applies against title and/or body| Vuex javascript functions | M 
|I can filter by hashtag| Vuex javascript | M 
|I can see a list of todo items colored by hashtag| Base todo item component | M
| when I refresh the page I can still see my todo items| persist data on firebase; fetch on component creation | M

Time Tracking
| Feature  | Implementation  | MSCW |
|---|---|----|
|I can track the number of days/hours/minutes/seconds I have worked on a task.| task items will have a duration property -- if you do the task, value is added to associated goal's *time logged* key | M
|I can view the amount of time (if at all) I’ve spent on any given task| see above | M
|(Stretch) I can sort by the amount of time I’ve spent on a task| | 
|(Stretch) I can start a timer that then automatically counts how long I’ve beeworking on a task. If I close the tab or logoff, the timer should not stopinstead, it should continue ticking down.| | C
|(Stretch) I can give a task a amount of time to be completed|
|(Stretch) I can see indication of taskes past their deadline|

Dashboard
| Feature  | Implementation  | MSCW |
|---|---|----|

## Prototyping
https://www.figma.com/file/CagjBx2DpD4xXivZsCNcPH/mintbean-goal-tracker?node-id=0%3A1
    
## Data Models

1. Goals
   * _State_: 
      * _Goals:_
        * UUID
        * Title
        * Steps completed
        * Steps total
        * Start time
        * Deadline 
        * Frequency
        * Descriptive body
        * Hashtag 
        * Step duration
        * Time logged
        

      
   
2. Steps
    * _State_: 
      * _Steps:_
        * UUID
        * Associated Goal ID
        * Title
        * Date
        * Step Duration
        * Status
        * Hashtag
        * 

      
## UI (template)

1. Routing + Screen Components
  * /coaches                      -- coachesList
  * /coaches/:id                  -- coachDetail
  * /register                     -- coachRegistration
  * /coaches/:id/contact          -- contactCoach
  * /requests                     -- requestsReceieved
  
