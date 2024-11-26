CREATE DATABASE  IF NOT EXISTS `capstone_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `capstone_db`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: capstone_db
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `booking_date` date NOT NULL,
  `cusromer_email` varchar(255) NOT NULL,
  `cusromer_name` varchar(255) NOT NULL,
  `cusromer_phone_no` varchar(255) NOT NULL,
  `no_of_tickets` int NOT NULL,
  `status` enum('confirmed','payment pending','cancelled') NOT NULL,
  `total_price` decimal(38,2) NOT NULL,
  `user_id` int DEFAULT NULL,
  `show_id` int NOT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `FK5f9847fuaqx7qe2xug4e5pky1` (`show_id`),
  KEY `FKeyog2oic85xg7hsu2je2lx3s6` (`user_id`),
  CONSTRAINT `FK5f9847fuaqx7qe2xug4e5pky1` FOREIGN KEY (`show_id`) REFERENCES `shows` (`show_id`),
  CONSTRAINT `FKeyog2oic85xg7hsu2je2lx3s6` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (1,'2024-11-26','harish.mohanty@gmail.com','Harisankar','9876543456',3,'confirmed',1800.00,NULL,3),(2,'2024-11-26','harish.mohanty@gmail.com','Harish','5678905434',5,'confirmed',1200.00,NULL,5);
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `emailid` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`emailid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `movie_id` int NOT NULL AUTO_INCREMENT,
  `genre` varchar(255) NOT NULL,
  `lang` varchar(255) NOT NULL,
  `movie_image` longblob,
  `release_date` date NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `starer` text NOT NULL,
  PRIMARY KEY (`movie_id`),
  UNIQUE KEY `UKcan65rtds29tdltfqoyue4hgl` (`title`,`lang`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'action','english',_binary 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Gunner_film_poster.jpg/220px-Gunner_film_poster.jpg','2024-03-01','Gunner','Lee Gunner tries to save his sons, Luke and Travis, from a dangerous drug gang.',''),(2,'thriller','hindi',_binary 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Do_Patti.jpg/220px-Do_Patti.jpg','2024-05-07','Do Patti','The film opens with Saumya and Dhruv at Devipur village police station in Uttarakhand, where Saumya accuses Dhruv of attempting to kill her. The story flashes back to an earlier incident when police officer Vidya Jyothi (VJ) receives a call regarding domestic abuse but finds it dismissed as a false alarm. However, Maaji, a maternal figure to Saumya, privately reveals that she had placed the call out of concern, explaining that Saumya gets brutally abused by her husband, Dhruv. Though Saumya decides to remain silent about it. ',''),(3,'thriller','english',_binary 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Dont_Move_2024_film_poster.jpg/220px-Dont_Move_2024_film_poster.jpg','2024-04-03','Don\'t Move','Iris is grieving for her young son Mateo, who died during a family hiking trip. She visits the site of his death and, inconsolable, considers jumping off a cliff. A man appears, who introduces himself as Richard. After talking to him for a few minutes, Iris changes her mind. She follows Richard back to their parked cars. There he attacks her with a stun device, ties her wrists and ankles with zip ties, and places her in the back of his car.','Kelsey Asbille,Moray Treadwell'),(4,'horror','english',_binary 'https://m.media-amazon.com/images/I/51z8pExvzfL.jpg','2024-04-10','Bagman','When a sinister threat from his childhood returns to haunt him, a father desperately struggles against his deepest inner fear. Only this time, the fight isn\'t for himself; it\'s for his family.','Sam ClaflinAntonia, ThomasCaréll, Vincent Rhoden'),(5,'drama','marathi',_binary 'https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Phullwanti.jpg/220px-Phullwanti.jpg','2024-05-14','Phullwanti','The film stars Mali in the title role, alongside Gashmeer Mahajani.[5] Based on Babasaheb Purandare\'s Marathi novel Phulwanti, the film is set in the Peshwa era and narrates the story of the dancer Phullwanti and the renowned Peshwa Pandit scholar ','Prajakta Mali, Gashmeer Mahajani'),(6,'Drama','Hindi',_binary 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dktLdujBS8fkuhxCt5IGbiqVYGQrcT2je0-zEZblsNmi0rqswKVFYw&s=0','2024-09-04','Siddharth Roy','A man embraces logic and reason, but he\'s overwhelmed by emotions, resulting in heartache and inner turmoil.','Gaurav Mahaur, Kalyani Natarajan, Tanvi Negi'),(7,'Thriller','Tamil',_binary 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Ranam_Aram_Thavarel.jpg/220px-Ranam_Aram_Thavarel.jpg','2024-09-04','Ranam Aram Thavarel','Ranam Aram Thavarel (transl. Blood from the failure to do good),[2] also referred to as Ranam, is a 2024 Indian Tamil-language mystery thriller film written and directed by Sherief. The film stars Vaibhav, Nandita Swetha and Tanya Hope in the lead roles and marks Vaibhav\'s 25th film.[3] The film was produced by Madhu Nagarajan under the banner of Mithun Mithra Productions.[4] The film was released on 23 February 2024 to positive reviews from critics. ','Vaibhav, Nandita Swetha, Tanya Hope');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shows`
--

DROP TABLE IF EXISTS `shows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shows` (
  `show_id` int NOT NULL AUTO_INCREMENT,
  `end_time` time(6) NOT NULL,
  `movie_id` int NOT NULL,
  `show_date` date NOT NULL,
  `start_time` time(6) NOT NULL,
  `theatre_id` int NOT NULL,
  `ticket_price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`show_id`),
  KEY `FKrebl1pi45k6pahj4ptueqqv3q` (`theatre_id`),
  KEY `FKqdpwhiv5r3lx844pct0eudapk` (`movie_id`),
  CONSTRAINT `FKqdpwhiv5r3lx844pct0eudapk` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`),
  CONSTRAINT `FKrebl1pi45k6pahj4ptueqqv3q` FOREIGN KEY (`theatre_id`) REFERENCES `theatres` (`theatre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shows`
--

LOCK TABLES `shows` WRITE;
/*!40000 ALTER TABLE `shows` DISABLE KEYS */;
INSERT INTO `shows` VALUES (1,'22:15:00.000000',2,'2024-12-01','20:30:00.000000',6,200.00),(2,'21:15:00.000000',3,'2024-12-01','19:45:00.000000',8,250.00),(3,'17:30:00.000000',3,'2024-12-19','15:20:00.000000',10,600.00),(4,'23:30:00.000000',5,'2024-11-27','19:30:00.000000',6,350.00),(5,'11:45:00.000000',1,'2024-12-03','09:30:00.000000',7,240.00),(6,'23:36:00.000000',6,'2024-11-25','21:10:00.000000',16,340.00);
/*!40000 ALTER TABLE `shows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `theatres`
--

DROP TABLE IF EXISTS `theatres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `theatres` (
  `theatre_id` int NOT NULL AUTO_INCREMENT,
  `capacity` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`theatre_id`),
  UNIQUE KEY `UK1ofun35le0qbb7uep40lbf2hk` (`name`,`location`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theatres`
--

LOCK TABLES `theatres` WRITE;
/*!40000 ALTER TABLE `theatres` DISABLE KEYS */;
INSERT INTO `theatres` VALUES (5,'200','Pune','NMS Cinemas'),(6,'200','Bangalore','NMS Cinemas'),(7,'200','Bhubaneswar','NMS Cinemas'),(8,'200','Hyderabad','NMS Cinemas'),(9,'180','Delhi','NMS Cinemas'),(10,'180','Kanpur','NMS Cinemas'),(11,'140','Puri','NMS Cinemas'),(12,'120','Bhadrak','NMS Cinemas'),(13,'200','Sambalpur','NMS Cinemas'),(14,'80','Dehradun','NMS Cinemas'),(15,'230','Chennai','NMS Cinemas'),(16,'250','Kolkata','NMS Cinemas');
/*!40000 ALTER TABLE `theatres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'hari@simplilearn.in','Harisankar','Hari@#1979','customer'),(2,'akash@simplilearn.in','Akash','Akash@#1980','customer'),(3,'admin@simplilearn.in','Admin','Admin@#2024','admin'),(4,'swagatika@simplilearn.in','Swagatika Pattnaik','Swag@#1986','customer');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-26  3:31:03
