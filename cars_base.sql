-- phpMyAdmin SQL Dump
-- version 3.4.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Czas wygenerowania: 13 Gru 2022, 00:33
-- Wersja serwera: 5.5.20
-- Wersja PHP: 5.3.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Baza danych: `car_shop_db`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla  `cars_base`
--

CREATE TABLE IF NOT EXISTS `cars_base` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `model` varchar(30) DEFAULT NULL,
  `prod_year` int(11) DEFAULT NULL,
  `distance` int(11) DEFAULT NULL,
  `engine_size` float DEFAULT NULL,
  `price` float DEFAULT NULL,
  `description` text,
  `image_name` varchar(150) DEFAULT NULL,
  `fuel_id` int(11) DEFAULT NULL,
  `car_type_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=253 ;

--
-- Zrzut danych tabeli `cars_base`
--

INSERT INTO `cars_base` (`Id`, `name`, `model`, `prod_year`, `distance`, `engine_size`, `price`, `description`, `image_name`, `fuel_id`, `car_type_id`) VALUES
(1, 'Audi', 'A4', 2013, 143560, 1998, 125600, 'Opis', 'audi_a4_1_1', 1, 5),
(2, 'Suzuki', 'Swift', 2007, 213789, 1299, 14500, 'Opis :D', 'suzuki_swift_2_1', 1, 4),
(3, 'Audi', 'Q5', 2016, 56987, 1988, 98000, '', 'audi_q5_3_1', 1, 6),
(252, 'Opel', 'Corsa', 2021, 3200, 999, 65000, '', 'stockImage', 1, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
