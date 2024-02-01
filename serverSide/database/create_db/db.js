// // const mysql = require('mysql2/promise');
// import mysql from 'mysql2/promise'
 //   (62, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
  //     (63, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
  //     (64, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', '2023-12-20', 1),
  //     (65, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2024-01-05', 1),
  //     (66, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', '2023-12-26', 0),
  //     (67, 'Franklin Johnson', 'franklin@example.com', '0551112233', '2024-01-10', '2024-01-25', 1),
  //     (68, 'Grace Smith', 'grace@example.com', '0552223344', '2024-01-15', '2024-01-27', 1),
  //     (69, 'Henry Brown', 'henry@example.com', '0553334455', '2024-01-20', '2024-01-27', 1),
  //     (70, 'Isabella Davis', 'isabella@example.com', '0554445566', '2024-01-25', '2024-01-28', 1),
  //     (71, 'Jack Wilson', 'jack@example.com', '0555556677', '2024-01-30', '2024-02-10', 1),
  //     (72, 'Katherine Martinez', 'katherine@example.com', '0556667788', '2024-02-05', '2024-02-20', 1),
  //     (73, 'Liam Anderson', 'liam@example.com', '0557778899', '2024-02-10', '2024-02-25', 1),
  //     (74, 'Mia Thompson', 'mia@example.com', '0558889900', '2024-02-15', '2024-03-01', 1),
  //     (75, 'Noah White', 'noah@example.com', '0559990011', '2024-02-20', '2024-03-05', 1),
  //     (76, 'Olivia Harris', 'olivia@example.com', '0550011223', '2024-02-25', '2024-03-10', 1),
  //     (77, 'William Martin', 'william@example.com', '0551122334', '2024-03-01', '2024-03-16', 1),
  // (78, 'Sophia Garcia', 'sophia@example.com', '0552233445', '2024-03-05', '2024-03-20', 1),
  // (79, 'James Rodriguez', 'james@example.com', '0553344556', '2024-03-10', '2024-03-25', 1),
  // (80, 'Charlotte Lopez', 'charlotte@example.com', '0554455667', '2024-03-15', '2024-03-30', 1),
  // (81, 'Benjamin Perez', 'benjamin@example.com', '0555566778', '2024-03-20', '2024-04-04', 1);`;
  // (62, 'Emma Wilson', 'emma@example.com', '0556677889', '2024-04-01', '2024-04-16', 1),
  // (63, 'Alexander Martinez', 'alexander@example.com', '0557788990', '2024-04-05', '2024-04-20', 1);`
//  64, 'Madison Anderson', 'madison@example.com', '0558899001', '2024-04-10', '2024-04-25', 1),
//   (65, 'Michael Thompson', 'michael@example.com', '0559900112', '2024-04-15', '2024-05-01', 1),
//   (66, ' Ava White', 'ava@example.com', '0550011223', '2024-04-20', '2024-05-05', 1),
//   (62, 'Noah Wilson', 'noah@example.com', '0556677889', '2024-05-01', NULL, 0),
//   (63, 'Olivia Garcia', 'olivia@example.com', '0557788990', '2024-05-05', NULL, 0),
//   (64, 'Liam Rodriguez', 'liam@example.com', '0558899001', '2024-05-10', NULL, 0),
//   (65, 'Emma Lopez', 'emma@example.com', '0559900112', '2024-05-15', NULL, 0),
//   (66, 'Ava Perez', 'ava@example.com', '0550011223', '2024-05-20', NULL, 0),
//   (67, 'William Martin', 'william@example.com', '0556677889', '2024-06-01', NULL, 0);`
// (68, 'Sophia Garcia', 'sophia@example.com', '0557788990', '2024-01-05', NULL, 0);`

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'library',
//     password: '0523648679',
// });

// async function booksGetALL() {
//     try {
      //  (69, 'James Rodriguez', 'james@example.com', '0558899001', '2024-01-10', NULL, 0),
      //  (70, 'Charlotte Lopez', 'charlotte@example.com', '0559900112', '2024-01-15', NULL, 0),
      //  (71, 'Benjamin Perez', 'benjamin@example.com', '0550011223', '2024-01-10', NULL, 0),
      //  (81, 'John Doe', 'john@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
      // (112, 'Michael Brown', 'michael@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
      
      //  (113, 'Sarah Wilson', 'sarah@example.com', '0556667777', '2024-01-06', '2024-01-18', 1);`
      //        // (110, 'Bob Johnson', 'bob@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
      // // (111, 'Emily Davis', 'emily@example.com', '0554445555', '2024-01-04', '2024-01-18', 1);`
      // (108, 'Alice Smith', 'alice@example.com', '0552223333', '2024-01-02', '2024-01-16', 1);`
//       const [data] = await pool.query(`INSERT INTO loans (book_id, borrower_name, borrower_email, borrower_phone, loan_date, return_date, returned)
//       VALUES
//           (62, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
//           (63, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
//           (64, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', 2023-12-20, 1),
//           (65, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', 2023-12-25, 1),
//           (66, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', 2023-12-29, 1),
//           (62,  'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
//           (63,  'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
//           (64,  'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', 2023-12-25, 1),
//           (65,  'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', 2023-12-27, 1),
//           (66,  'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', 2023-12-27, 1),
//           (67, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
//           (68, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
//           (69, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', 2023-12-20, 1),
//           (70, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', 2023-12-28, 1),
//           (71, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', 2023-12-27, 1),
//           (62, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
//           (63, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
//           (64, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', 2023-12-20, 1),
//           (65, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2024-01-05', 1),
//           (66, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', 2023-12-26, 0),
//           (62, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
//           (63, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 0),
//           (64, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', NULL, 0),
//           (65, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2024-01-05', 1),
//           (66, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', 2023-12-27, 0),
//           (62, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
//           (63, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
//           (64, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', '2023-12-20', 1),
//           (65, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2024-01-05', 1),
//           (66, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', '2024-01-10', 1),
//           (67, 'Franklin Johnson', 'franklin@example.com', '0551112233', '2024-01-10', 2024-01-25, 1),
//           (68, 'Grace Smith', 'grace@example.com', '0552223344', '2024-01-15', 2024-01-27, 1),
//           (69, 'Henry Brown', 'henry@example.com', '0553334455', '2024-01-20', 2024-01-27, 1),
//           (70, 'Isabella Davis', 'isabella@example.com', '0554445566', '2024-01-25', 2024-01-28, 1),
//           (71, 'Jack Wilson', 'jack@example.com', '0555556677', '2024-01-30', 2024-02-10, 1),
//           (72, 'Katherine Martinez', 'katherine@example.com', '0556667788', '2024-02-05', '2024-02-20', 1),
//           (73, 'Liam Anderson', 'liam@example.com', '0557778899', '2024-02-10', '2024-02-25', 1),
//           (74, 'Mia Thompson', 'mia@example.com', '0558889900', '2024-02-15', '2024-03-01', 1),
//           (75, 'Noah White', 'noah@example.com', '0559990011', '2024-02-20', '2024-03-05', 1),
//           (76, 'Olivia Harris', 'olivia@example.com', '0550011223', '2024-02-25', '2024-03-10', 1),
//           (77, 'William Martin', 'william@example.com', '0551122334', '2024-03-01', '2024-03-16', 1),
//           (78, 'Sophia Garcia', 'sophia@example.com', '0552233445', '2024-03-05', '2024-03-20', 1),
//           (79, 'James Rodriguez', 'james@example.com', '0553344556', '2024-03-10', '2024-03-25', 1),
//           (80, 'Charlotte Lopez', 'charlotte@example.com', '0554455667', '2024-03-15', '2024-03-30', 1),
//           (81, 'Benjamin Perez', 'benjamin@example.com', '0555566778', '2024-03-20', '2024-04-04', 1),
//           (62, 'Emma Wilson', 'emma@example.com', '0556677889', '2024-04-01', '2024-04-16', 1),
//           (63, 'Alexander Martinez', 'alexander@example.com', '0557788990', '2024-04-05', '2024-04-20', 1),
//           (64, 'Madison Anderson', 'madison@example.com', '0558899001', '2024-04-10', '2024-04-25', 1),
//           (65, 'Michael Thompson', 'michael@example.com', '0559900112', '2024-04-15', '2024-05-01', 1),
//           (66, 'Ava White', 'ava@example.com', '0550011223', '2024-04-20', '2024-05-05', 1),
//           (62, 'Noah Wilson', 'noah@example.com', '0556677889', '2024-05-01', NULL, 0),
//           (63, 'Olivia Garcia', 'olivia@example.com', '0557788990', '2024-05-05', NULL, 0),
//           (64, 'Liam Rodriguez', 'liam@example.com', '0558899001', '2024-05-10', NULL, 0),
//           (65, 'Emma Lopez', 'emma@example.com', '0559900112', '2024-05-15', NULL, 0),
//           (66, 'Ava Perez', 'ava@example.com', '0550011223', '2024-05-20', NULL, 0),
//           (67, 'William Martin', 'william@example.com', '0556677889', '2024-06-01', NULL, 0),
//           (68, 'Sophia Garcia', 'sophia@example.com', '0557788990', '2024-06-05', NULL, 0),
//           (69, 'James Rodriguez', 'james@example.com', '0558899001', '2024-06-10', NULL, 0),
//           (70, 'Charlotte Lopez', 'charlotte@example.com', '0559900112', '2024-06-15', NULL, 0),
//           (71, 'Benjamin Perez', 'benjamin@example.com', '0550011223', '2024-06-20', NULL, 0),
//           ('72', 'John Doe', 'john@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
//           ('73', 'Alice Smith', 'alice@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
//           ('74', 'Bob Johnson', 'bob@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
//           ('75', 'Emily Davis', 'emily@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
//           ('76', 'Michael Brown', 'michael@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
//           ('77', 'Sarah Wilson', 'sarah@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
//           ('78', 'David Martinez', 'david@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
//           ('79', 'Jessica Anderson', 'jessica@example.com', '0558889999', '2024-01-08', '2024-01-22', 1),
//           ('80', 'Daniel Taylor', 'daniel@example.com', '0559990000', '2024-01-09', '2024-01-23', 1),
//           ('81', 'Olivia Thomas', 'olivia@example.com', '0550001111', '2024-01-10', '2024-01-24', 1),
//           ('81', 'Emma White', 'emma@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
//           ('82', 'Christopher Lee', 'christopher@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
//           ('83', 'Mia Garcia', 'mia@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
//           ('84', 'William Rodriguez', 'william@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
//           ('85', 'Sophia Hernandez', 'sophia@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
//           ('86', 'Matthew Martinez', 'matthew@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
//           ('87', 'Ava Lopez', 'ava@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
//           ('88', 'Alexander Gonzales', 'alexander@example.com', '0558889999', '2024-01-08', '2024-01-22', 1),
//           ('89', 'Aiden Wilson', 'aiden@example.com', '0559990000', '2024-01-09', '2024-01-23', 1),
//           ('90', 'Charlotte Anderson', 'charlotte@example.com', '0550001111', '2024-01-10', '2024-01-24', 1),
//           ('91', 'Ethan Thomas', 'ethan@example.com', '0550002222', '2024-01-11', '2024-01-25', 1),
//           ('92', 'Grace Taylor', 'grace@example.com', '0550003333', '2024-01-12', '2024-01-26', 1),
//           ('92', 'Ella Brown', 'ella@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
//           ('93', 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
//           ('94', 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
//           ('95', 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
//           ('96', 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
//           ('97', 'Connor Davis', 'connor@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
//           ('98', 'Zoe Anderson', 'zoe@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
//           ('99', 'Gabriel Lee', 'gabriel@example.com', '0558889999', '2024-01-08', '2024-01-22', 1),
//           ('100', 'Avery Johnson', 'avery@example.com', '0559990000', '2024-01-09', '2024-01-23', 1),
//           ('101', 'Mila Rodriguez', 'mila@example.com', '0550001111', '2024-01-10', '2024-01-24', 1),
//           ('102', 'Logan Hernandez', 'logan@example.com', '0550002222', '2024-01-11', '2024-01-25', 1),
//           ('103', 'Grace Thomas', 'grace@example.com', '0550003333', '2024-01-12', '2024-01-26', 1),
//           ('104', 'Ryan Wilson', 'ryan@example.com', '0550004444', '2024-01-13', '2024-01-27', 1),
//           ('105', 'Aria Martinez', 'aria@example.com', '0550005555', '2024-01-14', '2024-01-28', 1),
//           ('106', 'Nathan Brown', 'nathan@example.com', '0550006666', '2024-01-15', '2024-01-29', 1),
//           ('72', 'John Doe', 'john@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
//           ('73', 'Alice Smith', 'alice@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
//           ('74', 'Bob Johnson', 'bob@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
//           ('75', 'Emily Davis', 'emily@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
//           ('76', 'Michael Brown', 'michael@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
//           ('77', 'Sarah Wilson', 'sarah@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
//           ('78', 'David Martinez', 'david@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
//           ('79', 'Jessica Anderson', 'jessica@example.com', '0558889999', '2024-01-08', '2024-01-22', 1),
//           ('80', 'Daniel Taylor', 'daniel@example.com', '0559990000', '2024-01-09', '2024-01-23', 1),
//           ('81', 'Olivia Thomas', 'olivia@example.com', '0550001111', '2024-01-10', '2024-01-24', 1),
//           ('82', 'Emma White', 'emma@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
//           ('83', 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
//           ('84', 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
//           ('85', 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
//           ('86', 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
//           ('87', 'Connor Davis', 'connor@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
//           ('88', 'Zoe Anderson', 'zoe@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
//           ('89', 'Gabriel Lee', 'gabriel@example.com', '0558889999', '2024-01-08', '2024-01-22', 1),
//           ('90', 'Avery Johnson', 'avery@example.com', '0559990000', '2024-01-09', '2024-01-23', 1),
//           ('91', 'Mila Rodriguez', 'mila@example.com', '0550001111', '2024-01-10', '2024-01-24', 1),
//           ('92', 'Ella Brown', 'ella@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
//           ('93', 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
//           ('94', 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
//           ('95', 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
//           ('96', 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
//           ('97', 'Connor Davis', 'connor@example.com', '0556667777', '2024-01-06', NULL, 0),
//           ('98', 'Zoe Anderson', 'zoe@example.com', '0557778888', '2024-01-07', NULL, 0),
//           ('99', 'Gabriel Lee', 'gabriel@example.com', '0558889999', '2024-01-08', NULL, 0),
//           ('100', 'Avery Johnson', 'avery@example.com', '0559990000', '2024-01-09', NULL, 0),
//           ('101', 'Mila Rodriguez', 'mila@example.com', '0550001111', '2024-01-10', NULL, 0),
//           ('102', 'Ella Brown', 'ella@example.com', '0551112222', '2024-01-01', NULL, 0),
//           ('103', 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', NULL', 0),
//           ('104', 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', NULL, 0),
//           ('105', 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', NULL, 0),
//           ('106', 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', NULL, 0),

// //       `);
//       if (data.length > 0) {
//         console.log(data);
//         // return data;
//       } else {
//         console.log(null);
//         // return null;
//       }
//     } catch (error) {
//       console.error("Error in todosGetALL:", error);
//     //   throw error;
//     }
//   }

// ('100', 'Avery Johnson', 'avery@example.com', '0559990000', '2024-01-09', '2024-01-23', 1),
// ('101', 'Mila Rodriguez', 'mila@example.com', '0550001111', '2024-01-10', '2024-01-24', 1),
// ('102', 'Logan Hernandez', 'logan@example.com', '0550002222', '2024-01-11', '2024-01-25', 1),
// ('103', 'Grace Thomas', 'grace@example.com', '0550003333', '2024-01-12', '2024-01-26', 1),
// ('104', 'Ryan Wilson', 'ryan@example.com', '0550004444', '2024-01-13', '2024-01-27', 1),
// ('105', 'Aria Martinez', 'aria@example.com', '0550005555', '2024-01-14', '2024-01-28', 1),
// ('106', 'Nathan Brown', 'nathan@example.com', '0550006666', '2024-01-15', '2024-01-29', 1),
// ('72', 'John Doe', 'john@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
// ('73', 'Alice Smith', 'alice@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
// ('74', 'Bob Johnson', 'bob@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
// ('75', 'Emily Davis', 'emily@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
// ('76', 'Michael Brown', 'michael@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
// ('77', 'Sarah Wilson', 'sarah@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
// ('78', 'David Martinez', 'david@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
// ('79', 'Jessica Anderson', 'jessica@example.com', '0558889999', '2024-01-08', '2024-01-22', 1),
// ('80', 'Daniel Taylor', 'daniel@example.com', '0559990000', '2024-01-09', '2024-01-23', 1),
// ('81', 'Olivia Thomas', 'olivia@example.com', '0550001111', '2024-01-10', '2024-01-24', 1),
// ('82', 'Emma White', 'emma@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
// ('83', 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
// ('84', 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
// ('85', 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
// ('86', 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
// ('87', 'Connor Davis', 'connor@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
// ('88', 'Zoe Anderson', 'zoe@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
// ('89', 'Gabriel Lee', 'gabriel@example.com', '0558889999', '2024-01-08', '2024-01-22', 1),
// ('90', 'Avery Johnson', 'avery@example.com', '0559990000', '2024-01-09', '2024-01-23', 1),
// ('91', 'Mila Rodriguez', 'mila@example.com', '0550001111', '2024-01-10', '2024-01-24', 1),
// ('92', 'Ella Brown', 'ella@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
// ('93', 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
// ('94', 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
// ('95', 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
// ('96', 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
// ('97', 'Connor Davis', 'connor@example.com', '0556667777', '2024-01-06', NULL, 0),
// ('98', 'Zoe Anderson', 'zoe@example.com', '0557778888', '2024-01-07', NULL, 0),
// ('99', 'Gabriel Lee', 'gabriel@example.com', '0558889999', '2024-01-08', NULL, 0),
// ('100', 'Avery Johnson', 'avery@example.com', '0559990000', '2024-01-09', NULL, 0),
// ('101', 'Mila Rodriguez', 'mila@example.com', '0550001111', '2024-01-10', NULL, 0),
// ('102', 'Ella Brown', 'ella@example.com', '0551112222', '2024-01-01', NULL, 0),
// ('103', 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', NULL', 0),
// ('104', 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', NULL, 0),
// ('105', 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', NULL, 0),
// ('106', 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', NULL, 0);`;
// 7, 'Alexander Gonzales', 'alexander@example.com', '0558889999', '2024-01-08', '2024-01-22', 1),
  // (38, 'Aiden Wilson', 'aiden@example.com', '0559990000', '2024-01-09', '2024-01-23', 1),
  // (39, 'Charlotte Anderson', 'charlotte@example.com', '0550001111', '2024-01-10', '2024-01-24', 1),
  // (40, 'Ethan Thomas', 'ethan@example.com', '0550002222', '2024-01-11', '2024-01-25', 1),
  // (41, 'Grace Taylor', 'grace@example.com', '0550003333', '2024-01-12', '2024-01-26', 1),
  // (42, 'Ella Brown', 'ella@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
  // (41, 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
  // (42, 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
  // (43, 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
  // (44, 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
  // (45, 'Connor Davis', 'connor@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
  // (46, 'Zoe Anderson', 'zoe@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
  // (47, 'Gabriel Lee', 'gabriel@example.com', '0558889999', '2024-01-08', '2024-01-22', 1),
  // (48, 'Avery Johnson', 'avery@example.com', '0559990000', '2024-01-09', '2024-01-23', 1),
  // (49, 'Mila Rodriguez', 'mila@example.com', '0550001111', '2024-01-10', '2024-01-24', 1),
  // (50, 'Logan Hernandez', 'logan@example.com', '0550002222', '2024-01-11', '2024-01-25', 1),
  // (51, 'Grace Thomas', 'grace@example.com', '0550003333', '2024-01-12', '2024-01-26', 1),
  // (52, 'Ryan Wilson', 'ryan@example.com', '0550004444', '2024-01-13', '2024-01-27', 1),
  // (53, 'Aria Martinez', 'aria@example.com', '0550005555', '2024-01-14', '2024-01-28', 1),
  // (54, 'Nathan Brown', 'nathan@example.com', '0550006666', '2024-01-15', '2024-01-29', 1),
  // (81, 'John Doe', 'john@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
  // (21, 'Alice Smith', 'alice@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
  // (22, 'Bob Johnson', 'bob@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
  // (23, 'Emily Davis', 'emily@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
  // (24, 'Michael Brown', 'michael@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
  // (25, 'Sarah Wilson', 'sarah@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
  // (26, 'David Martinez', 'david@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
  // (27, 'Jessica Anderson', 'jessica@example.com', '0558889999', '2024-01-08', '2024-01-22', 1),
  // (28, 'Daniel Taylor', 'daniel@example.com', '0559990000', '2024-01-09', '2024-01-23', 1),
  // (29, 'Olivia Thomas', 'olivia@example.com', '0550001111', '2024-01-10', '2024-01-24', 1),
  // (30, 'Emma White', 'emma@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
  // (31, 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
  // (32, 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
  // (33, 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
  // (34, 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
  // (35, 'Connor Davis', 'connor@example.com', '0556667777', '2024-01-06', NULL, 0),
  // (36, 'Zoe Anderson', 'zoe@example.com', '0557778888', '2024-01-07', NULL, 0),
  // (37, 'Gabriel Lee', 'gabriel@example.com', '0558889999', '2024-01-08', NULL, 0),
  // (38, 'Avery Johnson', 'avery@example.com', '0559990000', '2024-01-09', NULL, 0),
  // (39, 'Mila Rodriguez', 'mila@example.com', '0550001111', '2024-01-10', NULL, 0),
  // (40, 'Ella Brown', 'ella@example.com', '0551112222', '2024-01-01', NULL, 0),
  // (41, 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', NULL, 0),
  // (42, 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', NULL, 0),
  // (43, 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', NULL, 0),
  // (44, 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', NULL, 0),
  // (45, 'Connor Davis', 'connor@example.com', '0556667777', '2024-01-06', NULL, 0),
  // (46, 'Zoe Anderson', 'zoe@example.com', '0557778888', '2024-01-07', NULL, 0),
  // (47, 'Gabriel Lee', 'gabriel@example.com', '0558889999', '2024-01-08', NULL, 0),
  // (48, 'Avery Johnson', 'avery@example.com', '0559990000', '2024-01-09', NULL, 0),
  // (49, 'Mila Rodriguez', 'mila@example.com', '0550001111', '2024-01-10', NULL, 0),
  // (50, 'Ella Brown', 'ella@example.com', '0551112222', '2024-01-01', NULL, 0),
  // (51, 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', NULL, 0),
  // (52, 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', NULL, 0),
  // (53, 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', NULL, 0),
  // (54, 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', NULL, 0);
  // (62, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
  //           (63, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
  //           (64, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', '2023-12-20', 1),
  //           (65, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2023-12-25', 1),
  //           (66, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', '2023-12-29', 1),
  //           (62,  'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
  //           (63,  'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
  //           (64,  'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', '2023-12-25', 1),
  //           (65,  'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2023-12-27', 1),
  //           (66,  'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', '2023-12-27', 1),
  //           (67, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
  //           (68, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
  //           (69, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', '2023-12-20', 1),
  //           (70, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2023-12-28', 1),
  //           (71, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', '2023-12-27', 1),
  //           (62, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
  //           (63, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
  //           (64, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', '2023-12-20', 1),
  //           (65, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2024-01-05', 1),
  //           (66, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', '2023-12-26', 0),
  //           (62, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
  //           (63, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 0),
  //           (64, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', NULL, 0),
  //           (65, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2024-01-05', 1),
  //           (66, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', '2023-12-27', 0),
  //           (62, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
  //           (63, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
  //           (64, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', '2023-12-20', 1),
  //           (65, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2024-01-05', 1),
  //           (66, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', '2024-01-10', 1),
  //           (67, 'Franklin Johnson', 'franklin@example.com', '0551112233', '2024-01-10', '2024-01-25', 1),
  //           (68, 'Grace Smith', 'grace@example.com', '0552223344', '2024-01-15', '2024-01-27', 1),
  //           (69, 'Henry Brown', 'henry@example.com', '0553334455', '2024-01-20', '2024-01-27', 1),
  //           (70, 'Isabella Davis', 'isabella@example.com', '0554445566', '2024-01-25', '2024-01-28', 1),
  //           (71, 'Jack Wilson', 'jack@example.com', '0555556677', '2024-01-30', '2024-02-10', 1),
  //           (72, 'Katherine Martinez', 'katherine@example.com', '0556667788', '2024-02-05', '2024-02-20', 1),
  //           (73, 'Liam Anderson', 'liam@example.com', '0557778899', '2024-02-10', '2024-02-25', 1),
  //           (74, 'Mia Thompson', 'mia@example.com', '0558889900', '2024-02-15', '2024-03-01', 1),
  //           (75, 'Noah White', 'noah@example.com', '0559990011', '2024-02-20', '2024-03-05', 1),
  //           (76, 'Olivia Harris', 'olivia@example.com', '0550011223', '2024-02-25', '2024-03-10', 1),
  //           (77, 'William Martin', 'william@example.com', '0551122334', '2024-03-01', '2024-03-16', 1),
  //           (78, 'Sophia Garcia', 'sophia@example.com', '0552233445', '2024-03-05', '2024-03-20', 1),
  //           (79, 'James Rodriguez', 'james@example.com', '0553344556', '2024-03-10', '2024-03-25', 1),
  //           (80, 'Charlotte Lopez', 'charlotte@example.com', '0554455667', '2024-03-15', '2024-03-30', 1),
  //           (81, 'Benjamin Perez', 'benjamin@example.com', '0555566778', '2024-03-20', '2024-04-04', 1),
  //           (62, 'Emma Wilson', 'emma@example.com', '0556677889', '2024-04-01', '2024-04-16', 1),
  //           (63, 'Alexander Martinez', 'alexander@example.com', '0557788990', '2024-04-05', '2024-04-20', 1),
  //           (64, 'Madison Anderson', 'madison@example.com', '0558899001', '2024-04-10', '2024-04-25', 1),
  //           (65, 'Michael Thompson', 'michael@example.com', '0559900112', '2024-04-15', '2024-05-01', 1),
  //           (66, 'Ava White', 'ava@example.com', '0550011223', '2024-04-20', '2024-05-05', 1),
  //           (62, 'Noah Wilson', 'noah@example.com', '0556677889', '2024-05-01', NULL, 0),
  //           (63, 'Olivia Garcia', 'olivia@example.com', '0557788990', '2024-05-05', NULL, 0),
  //           (64, 'Liam Rodriguez', 'liam@example.com', '0558899001', '2024-05-10', NULL, 0),
  //           (65, 'Emma Lopez', 'emma@example.com', '0559900112', '2024-05-15', NULL, 0),
  //           (66, 'Ava Perez', 'ava@example.com', '0550011223', '2024-05-20', NULL, 0),
  //           (67, 'William Martin', 'william@example.com', '0556677889', '2024-06-01', NULL, 0),
  //           (68, 'Sophia Garcia', 'sophia@example.com', '0557788990', '2024-06-05', NULL, 0),
  //           (69, 'James Rodriguez', 'james@example.com', '0558899001', '2024-06-10', NULL, 0),
  //           (70, 'Charlotte Lopez', 'charlotte@example.com', '0559900112', '2024-06-15', NULL, 0),
  //           (71, 'Benjamin Perez', 'benjamin@example.com', '0550011223', '2024-06-20', NULL, 0),
  //           ('72', 'John Doe', 'john@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
  //           ('73', 'Alice Smith', 'alice@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
  //           ('74', 'Bob Johnson', 'bob@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
  //           ('75', 'Emily Davis', 'emily@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
  //           ('76', 'Michael Brown', 'michael@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
  //           ('77', 'Sarah Wilson', 'sarah@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
  //           ('78', 'David Martinez', 'david@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
  //           ('79', 'Jessica Anderson', 'jessica@example.com', '0558889999', '2024-01-08', '2024-01-22', 1),
  //           ('80', 'Daniel Taylor', 'daniel@example.com', '0559990000', '2024-01-09', '2024-01-23', 1),
  //           ('81', 'Olivia Thomas', 'olivia@example.com', '0550001111', '2024-01-10', '2024-01-24', 1),
  //           ('81', 'Emma White', 'emma@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
  //           ('82', 'Christopher Lee', 'christopher@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
  //           ('83', 'Mia Garcia', 'mia@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
  //           ('84', 'William Rodriguez', 'william@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
  //           ('85', 'Sophia Hernandez', 'sophia@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
  //           ('86', 'Matthew Martinez', 'matthew@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
  //           ('87', 'Ava Lopez', 'ava@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
  //           ('88', 'Alexander Gonzales', 'alexander@example.com', '0558889999', '2024-01-08', '2024-01-22', 1),
  //           ('89', 'Aiden Wilson', 'aiden@example.com', '0559990000', '2024-01-09', '2024-01-23', 1),
  //           ('90', 'Charlotte Anderson', 'charlotte@example.com', '0550001111', '2024-01-10', '2024-01-24', 1),
  //           ('91', 'Ethan Thomas', 'ethan@example.com', '0550002222', '2024-01-11', '2024-01-25', 1),
  //           ('92', 'Grace Taylor', 'grace@example.com', '0550003333', '2024-01-12', '2024-01-26', 1),
  //           ('92', 'Ella Brown', 'ella@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
  //           ('93', 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
  //           ('94', 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
  //           ('95', 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
  //           ('96', 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
  //           ('97', 'Connor Davis', 'connor@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
  //           ('98', 'Zoe Anderson', 'zoe@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
// (26, 'David Martinez', 'david@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
  // (27, 'Jessica Anderson', 'jessica@example.com', '0558889999', '2024-01-08', '2024-01-22', 1),
  // (28, 'Daniel Taylor', 'daniel@example.com', '0559990000', '2024-01-09', '2024-01-18', 1),
  // (29, 'Olivia Thomas', 'olivia@example.com', '0550001111', '2024-01-10', '2024-01-19', 1),
  // (30, 'Emma White', 'emma@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
  // (31, 'Christopher Lee', 'christopher@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
  // (32, 'Mia Garcia', 'mia@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
  // (33, 'William Rodriguez', 'william@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
  // (34, 'Sophia Hernandez', 'sophia@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
  // (35, 'Matthew Martinez', 'matthew@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
  // (36, 'Ava Lopez', 'ava@example.com', '0557778888', '2024-01-07', '2024-01-21', 1);`;
      //   booksGetALL();
// // module.exports = {pool};




// async function insertLoans() {
    
//   try {
    
//     const query = `
//     INSERT INTO loans 
//     (book_id, borrower_name, borrower_email, borrower_phone, loan_date, return_date, returned)
// VALUES
//   
//   `;
  
  



//     const [rows, fields] = await pool.query(query);
//     console.log("Inserted rows:", rows.affectedRows);
//   } catch (error) {
//     console.error("Error inserting loans:", error);
//   }
// }

// insertLoans();
// (62, 'Emma Wilson', 'emma@example.com', '0556677889', '2024-01-01', '2024-01-16', 1),
// (63, 'Alexander Martinez', 'alexander@example.com', '0557788990', '2024-01-05', '2024-01-20', 1),
// (64, 'Madison Anderson', 'madison@example.com', '0558899001', '2024-01-10', '2024-01-21', 1),
// (65, 'Michael Thompson', 'michael@example.com', '0559900112', '2024-01-15', '2024-05-15', 1),
// (66, 'Ava White', 'ava@example.com', '0550011223', '2024-01-01', '2024-01-05', 1),
// (62, 'Noah Wilson', 'noah@example.com', '0556677889', '2024-01-01', NULL, 0),
// (63, 'Olivia Garcia', 'olivia@example.com', '0557788990', '2024-01-05', NULL, 0),
// (64, 'Liam Rodriguez', 'liam@example.com', '0558899001', '2024-01-10', NULL, 0),
// (65, 'Emma Lopez', 'emma@example.com', '0559900112', '2024-01-15', NULL, 0)
// (66, 'Ava Perez', 'ava@example.com', '0550011223', '2024-01-20', NULL, 0),
// (67, 'William Martin', 'william@example.com', '0556677889', '2024-01-01', NULL, 0),
// (68, 'Sophia Garcia', 'sophia@example.com', '0557788990', '2024-01-05', NULL, 0),
// (69, 'James Rodriguez', 'james@example.com', '0558899001', '2024-01-10', NULL, 0),
// (70, 'Charlotte Lopez', 'charlotte@example.com', '0559900112', '2024-01-15', NULL, 0),
// (71, 'Benjamin Perez', 'benjamin@example.com', '0550011223', '2024-01-20', NULL, 0),
// (81, 'John Doe', 'john@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
// (71, 'Alice Smith', 'alice@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
//  (72, 'Bob Johnson', 'bob@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
// (73, 'Emily Davis', 'emily@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
// (74, 'Michael Brown', 'michael@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
// ('100', 'Avery Johnson', 'avery@example.com', '0559990000', '2024-01-09', '2024-01-20', 1),
// ('101', 'Mila Rodriguez', 'mila@example.com', '0550001111', '2024-01-10', '2024-01-21', 1),
// ('102', 'Logan Hernandez', 'logan@example.com', '0550002222', '2024-01-11', '2024-01-21', 1),
// ('103', 'Grace Thomas', 'grace@example.com', '0550003333', '2024-01-12', '2024-01-20', 1),
// ('104', 'Ryan Wilson', 'ryan@example.com', '0550004444', '2024-01-13', '2024-01-20', 1),
// ('105', 'Aria Martinez', 'aria@example.com', '0550005555', '2024-01-14', '2024-01-20', 1),
// ('106', 'Nathan Brown', 'nathan@example.com', '0550006666', '2024-01-15', '2024-01-21', 1),
// ('72', 'John Doe', 'john@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
// ('73', 'Alice Smith', 'alice@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
// ('74', 'Bob Johnson', 'bob@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
// ('75', 'Emily Davis', 'emily@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
// ('76', 'Michael Brown', 'michael@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
// ('77', 'Sarah Wilson', 'sarah@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
// ('78', 'David Martinez', 'david@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
// ('79', 'Jessica Anderson', 'jessica@example.com', '0558889999', '2024-01-08', '2024-01-20', 1),
// ('80', 'Daniel Taylor', 'daniel@example.com', '0559990000', '2024-01-09', '2024-01-20', 1),
// ('81', 'Olivia Thomas', 'olivia@example.com', '0550001111', '2024-01-10', '2024-01-20', 1),
// ('82', 'Emma White', 'emma@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
// ('83', 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
// ('84', 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
// ('85', 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
// ('86', 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
// ('87', 'Connor Davis', 'connor@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
// ('88', 'Zoe Anderson', 'zoe@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
// ('89', 'Gabriel Lee', 'gabriel@example.com', '0558889999', '2024-01-08', '2024-01-20', 1),
// ('90', 'Avery Johnson', 'avery@example.com', '0559990000', '2024-01-09', '2024-01-21', 1)

// ('91', 'Mila Rodriguez', 'mila@example.com', '0550001111', '2024-01-10', '2024-01-20', 1),
// ('92', 'Ella Brown', 'ella@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
// ('93', 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
// ('94', 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
// ('95', 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
// ('96', 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', '2024-01-19', 1)
// ('97', 'Connor Davis', 'connor@example.com', '0556667777', '2024-01-06', NULL, 0),
// ('98', 'Zoe Anderson', 'zoe@example.com', '0557778888', '2024-01-07', NULL, 0),
// ('99', 'Gabriel Lee', 'gabriel@example.com', '0558889999', '2024-01-08', NULL, 0)

// ('100', 'Avery Johnson', 'avery@example.com', '0559990000', '2024-01-09', NULL, 0),
// ('101', 'Mila Rodriguez', 'mila@example.com', '0550001111', '2024-01-10', NULL, 0),
// ('102', 'Ella Brown', 'ella@example.com', '0551112222', '2024-01-01', NULL, 0)
// ('103', 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', NULL, 0),
// (102, 'Alexander Gonzales', 'alexander@example.com', '0558889999', '2024-01-08', '2024-01-21', 1)
// (98, 'Aiden Wilson', 'aiden@example.com', '0559990000', '2024-01-09', '2024-01-21', 1),
// (99, 'Charlotte Anderson', 'charlotte@example.com', '0550001111', '2024-01-10', '2024-01-20', 1),
// (90, 'Ethan Thomas', 'ethan@example.com', '0550002222', '2024-01-11', '2024-01-20', 1),
// (91, 'Grace Taylor', 'grace@example.com', '0550003333', '2024-01-12', '2024-01-20', 1),
// (92, 'Ella Brown', 'ella@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
// (91, 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
// (92, 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
// (93, 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
// (94, 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
// (95, 'Connor Davis', 'connor@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
// (96, 'Zoe Anderson', 'zoe@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
// (97, 'Gabriel Lee', 'gabriel@example.com', '0558889999', '2024-01-08', '2024-01-20', 1),
// (98, 'Avery Johnson', 'avery@example.com', '0559990000', '2024-01-09', '2024-01-20', 1),
// (99, 'Mila Rodriguez', 'mila@example.com', '0550001111', '2024-01-10', '2024-01-20', 1)
// (81, 'John Doe', 'john@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
// (81, 'Alice Smith', 'alice@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
// (82, 'Bob Johnson', 'bob@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
// (83, 'Emily Davis', 'emily@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
// (84, 'Michael Brown', 'michael@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
// (85, 'Sarah Wilson', 'sarah@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
// (86, 'David Martinez', 'david@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
// (87, 'Jessica Anderson', 'jessica@example.com', '0558889999', '2024-01-08', '2024-01-20', 1),
// (88, 'Daniel Taylor', 'daniel@example.com', '0559990000', '2024-01-09', '2024-01-20', 1),
// (89, 'Olivia Thomas', 'olivia@example.com', '0550001111', '2024-01-10', '2024-01-21', 1),
// (90, 'Emma White', 'emma@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
// (91, 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
// (92, 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
// (93, 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
// (94, 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
// (95, 'Connor Davis', 'connor@example.com', '0556667777', '2024-01-06', NULL, 0),
// (96, 'Zoe Anderson', 'zoe@example.com', '0557778888', '2024-01-07', NULL, 0),
// (97, 'Gabriel Lee', 'gabriel@example.com', '0558889999', '2024-01-08', NULL, 0),
// (98, 'Avery Johnson', 'avery@example.com', '0559990000', '2024-01-09', NULL, 0),
// (99, 'Mila Rodriguez', 'mila@example.com', '0550001111', '2024-01-10', NULL, 0),
// (104, 'Ella Brown', 'ella@example.com', '0551112222', '2024-01-01', NULL, 0),
// (105, 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', NULL, 0),
// (106, 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', NULL, 0),
// (107, 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', NULL, 0),
// (108, 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', NULL, 0),
// (109, 'Connor Davis', 'connor@example.com', '0556667777', '2024-01-06', NULL, 0),
// (110, 'Zoe Anderson', 'zoe@example.com', '0557778888', '2024-01-07', NULL, 0),
// (111, 'Gabriel Lee', 'gabriel@example.com', '0558889999', '2024-01-08', NULL, 0),
// (112, 'Avery Johnson', 'avery@example.com', '0559990000', '2024-01-09', NULL, 0),
// (107, 'Mila Rodriguez', 'mila@example.com', '0550001111', '2024-01-10', NULL, 0),
// (108, 'Ella Brown', 'ella@example.com', '0551112222', '2024-01-01', NULL, 0),
// (109, 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', NULL, 0),
// (110, 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', NULL, 0),
// (111, 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', NULL, 0),
// (112, 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', NULL, 0),
//           (63, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
//           (64, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', '2023-12-20', 1),
//           (65, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2023-12-25', 1),
//           (66, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', '2023-12-29', 1),
//           (62,  'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
//           (63,  'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
//           (64,  'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', '2023-12-25', 1),
//           (65,  'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2023-12-27', 1),
//           (66,  'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', '2023-12-27', 1),
//           (67, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
//           (68, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
//           (69, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', '2023-12-20', 1),
//           (70, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2023-12-28', 1),
//           (71, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', '2023-12-27', 1),
//           (62, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
//           (63, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
//           (64, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', '2023-12-20', 1),
//           (65, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2024-01-05', 1),
//           (66, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', '2023-12-28', 0),
//           (62, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
//           (63, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 0),
//           (64, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', NULL, 0),
//           (65, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2024-01-05', 1),
//           (66, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', '2023-12-27', 0),
//           (62, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),
//           (63, 'Bob Cohen', 'bob@example.com', '0549876543', '2023-11-15', '2023-12-15', 1),
//           (64, 'Carmela Levi', 'carmela@example.com', '0523334444', '2023-12-10', '2023-12-20', 1),
//           (65, 'Daniel Cohen', 'daniel@example.com', '0501112222', '2023-12-20', '2024-01-05', 1),
//           (66, 'Eleanor Cohen', 'eleanor@example.com', '0525556666', '2023-12-25', '2024-01-10', 1),
//           (67, 'Franklin Johnson', 'franklin@example.com', '0551112233', '2024-01-10', '2024-01-20', 1),
//           (68, 'Grace Smith', 'grace@example.com', '0552223344', '2024-01-15', '2024-01-20', 1),
//           (69, 'Henry Brown', 'henry@example.com', '0553334455', '2024-01-20', '2024-01-20', 1),
//           (70, 'Isabella Davis', 'isabella@example.com', '0554445566', '2024-01-15', '2024-01-20', 1),
//           (71, 'Jack Wilson', 'jack@example.com', '0555556677', '2024-01-01', '2024-01-15', 1),
//           (72, 'Katherine Martinez', 'katherine@example.com', '0556667788', '2024-01-05', '2024-01-20', 1),
//           (73, 'Liam Anderson', 'liam@example.com', '0557778899', '2024-01-10', '2024-01-25', 1),
//           (74, 'Mia Thompson', 'mia@example.com', '0558889900', '2024-01-15', '2024-01-25', 1),
//           (75, 'Noah White', 'noah@example.com', '0559990011', '2024-01-10', '2024-01-18', 1),
//           (76, 'Olivia Harris', 'olivia@example.com', '0550011223', '2024-01-01', '2024-01-10', 1),
//           (77, 'William Martin', 'william@example.com', '0551122334', '2024-01-01', '2024-01-16', 1),
//           (78, 'Sophia Garcia', 'sophia@example.com', '0552233445', '2024-01-05', '2024-01-20', 1),
//           (79, 'James Rodriguez', 'james@example.com', '0553344556', '2024-01-10', '2024-01-20', 1),
//           (80, 'Charlotte Lopez', 'charlotte@example.com', '0554455667', '2024-01-15', '2024-01-20', 1),
//           (81, 'Benjamin Perez', 'benjamin@example.com', '0555566778', '2024-01-05', '2024-01-20', 1),
//           (62, 'Emma Wilson', 'emma@example.com', '0556677889', '2024-01-01', '2024-01-16', 1),
//           (63, 'Alexander Martinez', 'alexander@example.com', '0557788990', '2024-01-05', '2024-01-20', 1),
//           (64, 'Madison Anderson', 'madison@example.com', '0558899001', '2024-01-10', '2024-01-21', 1),
//           (65, 'Michael Thompson', 'michael@example.com', '0559900112', '2024-01-15', '2024-01-21', 1),
//           (66, 'Ava White', 'ava@example.com', '0550011223', '2024-01-20', '2024-01-21', 1),
//           (62, 'Noah Wilson', 'noah@example.com', '0556677889', '2024-01-01', NULL, 0),
//           (63, 'Olivia Garcia', 'olivia@example.com', '0557788990', '2024-01-05', NULL, 0),
//           (64, 'Liam Rodriguez', 'liam@example.com', '0558899001', '2024-01-10', NULL, 0),
//           (65, 'Emma Lopez', 'emma@example.com', '0559900112', '2024-01-15', NULL, 0),
//           (66, 'Ava Perez', 'ava@example.com', '0550011223', '2024-01-20', NULL, 0),
//           (67, 'William Martin', 'william@example.com', '0556677889', '2024-01-01', NULL, 0),
//           (68, 'Sophia Garcia', 'sophia@example.com', '0557788990', '2024-01-05', NULL, 0),
//           (69, 'James Rodriguez', 'james@example.com', '0558899001', '2024-01-10', NULL, 0),
//           (70, 'Charlotte Lopez', 'charlotte@example.com', '0559900112', '2024-01-15', NULL, 0),
//           (71, 'Benjamin Perez', 'benjamin@example.com', '0550011223', '2024-01-20', NULL, 0),
//           ('72', 'John Doe', 'john@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
//           ('73', 'Alice Smith', 'alice@example.com', '0552223333', '2024-01-01', '2024-01-16', 1),
//           ('74', 'Bob Johnson', 'bob@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
//           ('75', 'Emily Davis', 'emily@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
//           ('76', 'Michael Brown', 'michael@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
//           ('77', 'Sarah Wilson', 'sarah@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
//           ('78', 'David Martinez', 'david@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
//           ('79', 'Jessica Anderson', 'jessica@example.com', '0558889999', '2024-01-08', '2024-01-20', 1),
//           ('80', 'Daniel Taylor', 'daniel@example.com', '0559990000', '2024-01-09', '2024-01-20', 1),
//           ('81', 'Olivia Thomas', 'olivia@example.com', '0550001111', '2024-01-10', '2024-01-20', 1),
//           ('81', 'Emma White', 'emma@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
//           ('82', 'Christopher Lee', 'christopher@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
//           ('83', 'Mia Garcia', 'mia@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
//           ('84', 'William Rodriguez', 'william@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
//           ('85', 'Sophia Hernandez', 'sophia@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
//           ('86', 'Matthew Martinez', 'matthew@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
//           ('87', 'Ava Lopez', 'ava@example.com', '0557778888', '2024-01-07', '2024-01-21', 1),
//           ('88', 'Alexander Gonzales', 'alexander@example.com', '0558889999', '2024-01-08', '2024-01-20', 1),
//           ('89', 'Aiden Wilson', 'aiden@example.com', '0559990000', '2024-01-09', '2024-01-20', 1),
//           ('90', 'Charlotte Anderson', 'charlotte@example.com', '0550001111', '2024-01-10', '2024-01-20', 1),
//           ('91', 'Ethan Thomas', 'ethan@example.com', '0550002222', '2024-01-11', '2024-01-20', 1),
//           ('92', 'Grace Taylor', 'grace@example.com', '0550003333', '2024-01-12', '2024-01-20', 1),
//           ('92', 'Ella Brown', 'ella@example.com', '0551112222', '2024-01-01', '2024-01-15', 1),
//           ('93', 'Jackson Garcia', 'jackson@example.com', '0552223333', '2024-01-02', '2024-01-16', 1),
//           ('94', 'Chloe Martinez', 'chloe@example.com', '0553334444', '2024-01-03', '2024-01-17', 1),
//           ('95', 'Luke Smith', 'luke@example.com', '0554445555', '2024-01-04', '2024-01-18', 1),
//           ('96', 'Lily Wilson', 'lily@example.com', '0555556666', '2024-01-05', '2024-01-19', 1),
//           ('97', 'Connor Davis', 'connor@example.com', '0556667777', '2024-01-06', '2024-01-20', 1),
//           ('98', 'Zoe Anderson', 'zoe@example.com', '0557778888', '2024-01-07', '2024-01-21', 1)
// (101, 'Grace Thomas', 'grace@example.com', '0550003333', '2024-01-12', '2024-01-21', 1),

// (100, 'Logan Hernandez', 'logan@example.com', '0550002222', '2024-01-11', '2024-01-21', 1),
// (102, 'Ryan Wilson', 'ryan@example.com', '0550004444', '2024-01-13', '2024-01-20', 1),
// (103, 'Aria Martinez', 'aria@example.com', '0550005555', '2024-01-14', '2024-01-20', 1),
// (104, 'Nathan Brown', 'nathan@example.com', '0550006666', '2024-01-15', '2024-01-21', 1),
// (113, 'Alice Cohen', 'alice@example.com', '0541234567', '2023-12-01', '2024-01-01', 1),


// (75, 'Sarah Wilson', 'sarah@example.com', '0556667777', '2024-01-06', '2024-01-20', 1)



import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "library",
  password: "0523648679",
});



// async function insertLoans() {
//   try {
//     const query = `
//       INSERT INTO loans 
//       (book_id, borrower_name, borrower_email, borrower_phone, loan_date, return_date, returned)
//       VALUES
   
   
//       ;`
      
 
 
  




      
//      ;
  
//     const [rows, fields] = await pool.query(query);
//     console.log("Inserted rows:", rows.affectedRows);
//   } catch (error) {
//     console.error("Error inserting loans:", error);
//   }
// }

// insertLoans();





async function insertAdmins() {
  try {
    const admins = [
      { username: "admin1", password: "password1" },
      { username: "admin2", password: "password2" },
      { username: "admin3", password: "password3" },
      { username: "admin4", password: "password4" },
      { username: "admin5", password: "password5" }
    ];

    let query = "INSERT INTO admins (username, password) VALUES ";
    const placeholders = admins.map(() => "(?, ?)").join(", ");
    const values = admins.flatMap(admin => [admin.username, admin.password]);
    query += placeholders;

    const [rows, fields] = await pool.query(query, values);
    console.log("Inserted admins:", rows.affectedRows);
  } catch (error) {
    console.error("Error inserting admins:", error);
  }
}

insertAdmins();





// books.js
// const moreBooks = [
//   {
//     title: 'Book 1 Title',
//     author: 'Author 1',
//     // ...other properties
//   },
//   // ...more books
// ];

// function checkForDuplicates(books) {
//   const seen = new Map();

//   for (const book of books) {
//     const key = `${book.title}-${book.author}`;

//     if (seen.has(key)) {
//       return `Duplicate found: "${book.title}" by ${book.author}`;
//     }

//     seen.set(key, true);
//   }

//   return 'No duplicates found';
// }

// module.exports = {
//   moreBooks,
//   checkForDuplicates,
// };
