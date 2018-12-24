
[![Build Status](http://localhost:8081/buildStatus/icon?job=s)](http://localhost:8081/job/s)

<p dir='rtl' align='right'>
הקוד ב- repo הזה מכיל את כל הבדיקות של ה- API Managment. 
</p>

<p dir='rtl' align='right'>
הוספה של בדיקה חדשה ל- API חדש
================
</p>

<p dir='rtl' align='right'>
 1. תחת התיקיה API צור תיקייה חדשה בשם ה- API החדש (שים לב, השם צריך להיות באותיות גדולות ללא רווחים), לדוגמא: MY_NEW_API
  <br>
  2. תחת התיקייה החדשה יש ליצור 3 תיקיות: <br>
   - ENV - קבצי הקונפיגורציה לפי סביבה <br>
    - SWAGGER - ה- yaml של ה- API <br>
    - TESTS - תיקיית הבדיקות<br>
  3. בתוך תיקיית ה- TESTS יש לייצר קובץ js עבור כל תסריט של בדיקה, לדוגמא: car_policy.dev.test.js (השם באותיות קטנות, כולל הסביבה והמילה test) <br>
  4. בנוסף, יש ליצור תיקייה בשם ה- test<br>
  5. בתיקייה זו יש ליצור 2 קבצים:  request.json ו- response.json, בכל קובץ יש לשים את התוכן המאתים של ה- request וה- response כקובץ json<br>
  6. כעת, יש לערוך את קובץ ה- test:<br>  - צריך להכניס את ה - client id וה- client secret<br>
  - צריך להכניס את ה- URL המתאים עבור ה- API<br>
 - עבור כל תשריט בדיקה, יש להכניס את שם ה - test (שהוא גם שם התיקייה)<br>
 - כעת, עבור כל תשריט יש להגדיר את ה- assertions המתאימים שהם בעצם ליבה של הבדיקה שקובעת האם הבדיקה הצליחה או נכשלה. מומלץ שיהיו לא יותר מ- 5 assertions. 
</p>

<p dir='rtl' align='right'>
הרצה של בדיקות API
================
</p>

<p dir='rtl' align='right'>
 יש ללכת לתיקייה הראשית - API_MANAGMENT
  <br>
  1. להריץ את הפקודה jest, פקודה זו תריץ את כל הבדיקות שבחבילה <br>
  2. כדי להריץ בדיקה של API ספציפית, ניתן לכתוב את שם ה- API,  לדוגמא להריץ את הפקודה jest car_policy, שתריץ רק את הבדיקות של ה- API בשם car_policy <br>
  הערה: לעיתים כדי להריץ את jest יש להשתמש בנתיב המלא: node node_modles/jest/bin/jest.js<br>
  

