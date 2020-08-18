USE volunteers_db;


INSERT INTO events (title, address, city, state, zip, timeFrame, createdAt, updatedAt, details)
VALUES ("Food Pantry Bus", "2121 Sutter St", "San Francisco", "CA", 94109, "8:00am-4:00pm", curdate(), curdate(), "Helping feed families in need. We make a huge impact on the community and are preventing world hunger");

INSERT INTO events (title, address, city, state, zip, timeFrame, createdAt, updatedAt, details)
VALUES ("Animal Shelter", "1717 K ST", "Sacramento", "CA", 94203, "8:00am-12:00pm", curdate(), curdate(), "At our animal shelter we need compassionate volunteers who can feed, bathe, and play with our animals. Our goal is to keep the animals healthy enough for adoption");

INSERT INTO events (title, address, city, state, zip, timeFrame, createdAt, updatedAt, details)
VALUES ("Youth Literacy Program", "5858 Main St", "San Jose", "CA", 94088, "9:00am-2:00pm", curdate(), curdate(), "The youth in our neighborhood are bright kids but sometimes fall behind due to circumstances outside of their control. This is why we need tutors willing to put in some hours after school to help them reach their full potential");