# sadhana-goal-keeper

# MINTBEAN GOAL TRACKER HACKATHON

## Prototyping
https://www.figma.com/file/kLf25vZPchjEkqG6ixgnM8/mintbean-goal-tracker?node-id=0%3A1
    
## Data Models

1. Goals
  * cycle: String
  * cycleDayOfMonth: String
  * cycleDaysOfWeek: Array
  * cycleOnceMonthlyDay: String
  * deadline: ISOString - YYYY-MM-DDTHH:MM:SS.000Z
  * description: String
  * durationMinutes: Number - only present if non-zero
  * durationHours: Number - only present if non-zero
  * id: string
  * noDuration: Boolean
  * noTime: Boolean
  * startDate: ISOString YYYY-MM-DDTHH:MM:SS.000Z
  * title: string
  * track: String
  * totalSteps: Number
  * stepsComplete: Number
        
   
2. Steps
    * _State_: 
      * _Step:_
        * goalId: Foreign key
        * title: 
        * dateTime: 
        * timeSpecific: 
        * durational: 
        * hoursDuration: 
        * minutesDuration: 
        * status: 
        * track: 

 
  
