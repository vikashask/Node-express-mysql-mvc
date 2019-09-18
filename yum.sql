-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2019 at 01:50 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yum`
--

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `brand_name` varchar(255) NOT NULL,
  `brand_title` varchar(255) DEFAULT NULL,
  `brand_desc` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id`, `brand_name`, `brand_title`, `brand_desc`, `isActive`) VALUES
(1, 'Yum', 'yum', 'yum desc', 1),
(2, 'Yum', 'yum', 'yum desc', 1);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `icon_img` varchar(255) DEFAULT NULL,
  `isVisibility` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `type`, `icon_img`, `isVisibility`) VALUES
(3, 'name2', 'type2', 'asdada', 1);

-- --------------------------------------------------------

--
-- Table structure for table `category_brand`
--

CREATE TABLE `category_brand` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `employee_role`
--

CREATE TABLE `employee_role` (
  `id` int(11) NOT NULL,
  `roleName` varchar(255) NOT NULL,
  `roleDesc` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee_role`
--

INSERT INTO `employee_role` (`id`, `roleName`, `roleDesc`, `isActive`) VALUES
(1, 'admin', 'admin', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`id`, `name`, `slug`, `description`, `isActive`) VALUES
(1, 'name121', 'slug1', 'description', 1),
(2, 'tag update', 'slug1', 'description test', 0),
(3, 'tag1', 'slug1', 'description test', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ingredients_brand`
--

CREATE TABLE `ingredients_brand` (
  `id` int(11) NOT NULL,
  `ingredients_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ingredients_used`
--

CREATE TABLE `ingredients_used` (
  `id` int(11) NOT NULL,
  `ingredients_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ingredients_used`
--

INSERT INTO `ingredients_used` (`id`, `ingredients_id`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `icon_img` varchar(255) DEFAULT NULL,
  `isVisibility` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `name`, `type`, `icon_img`, `isVisibility`) VALUES
(3, 'name', 'type', 'asdada', 0),
(4, '', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `menu_brand`
--

CREATE TABLE `menu_brand` (
  `id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `meta_tag`
--

CREATE TABLE `meta_tag` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `meta_tag`
--

INSERT INTO `meta_tag` (`id`, `name`) VALUES
(3, 'meta-name');

-- --------------------------------------------------------

--
-- Table structure for table `meta_tag_brand`
--

CREATE TABLE `meta_tag_brand` (
  `id` int(11) NOT NULL,
  `meta_tag_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `tags_ids` varchar(255) NOT NULL,
  `description` text,
  `video_ids` varchar(255) NOT NULL,
  `document_visibility` varchar(155) NOT NULL,
  `document_publish` varchar(255) NOT NULL,
  `is_stick_top` tinyint(1) NOT NULL DEFAULT '0',
  `parmalink` varchar(555) NOT NULL,
  `category_ids` varchar(255) NOT NULL,
  `meta_tag_ids` varchar(255) NOT NULL,
  `post_section_ids` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `post_brand`
--

CREATE TABLE `post_brand` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tags_brand`
--

CREATE TABLE `tags_brand` (
  `id` int(11) NOT NULL,
  `tags_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tags_used`
--

CREATE TABLE `tags_used` (
  `id` int(11) NOT NULL,
  `tags_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `profile_pic` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(12) DEFAULT NULL,
  `employee_role_id` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email_id`, `password`, `isActive`, `profile_pic`, `first_name`, `last_name`, `phone_number`, `employee_role_id`) VALUES
(7, 'vikashraj144@gmail.com', '25d55ad283aa400af464c76d713c07ad', 1, NULL, '', NULL, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_brand`
--
ALTER TABLE `category_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee_role`
--
ALTER TABLE `employee_role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ingredients_brand`
--
ALTER TABLE `ingredients_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ingredients_used`
--
ALTER TABLE `ingredients_used`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu_brand`
--
ALTER TABLE `menu_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meta_tag`
--
ALTER TABLE `meta_tag`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meta_tag_brand`
--
ALTER TABLE `meta_tag_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post_brand`
--
ALTER TABLE `post_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags_brand`
--
ALTER TABLE `tags_brand`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tags_id` (`tags_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `tags_used`
--
ALTER TABLE `tags_used`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tags_id` (`tags_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `category_brand`
--
ALTER TABLE `category_brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employee_role`
--
ALTER TABLE `employee_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ingredients_brand`
--
ALTER TABLE `ingredients_brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ingredients_used`
--
ALTER TABLE `ingredients_used`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `menu_brand`
--
ALTER TABLE `menu_brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `meta_tag`
--
ALTER TABLE `meta_tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `meta_tag_brand`
--
ALTER TABLE `meta_tag_brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post_brand`
--
ALTER TABLE `post_brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tags_brand`
--
ALTER TABLE `tags_brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tags_used`
--
ALTER TABLE `tags_used`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tags_brand`
--
ALTER TABLE `tags_brand`
  ADD CONSTRAINT `tags_brand_ibfk_1` FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tags_brand_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tags_used`
--
ALTER TABLE `tags_used`
  ADD CONSTRAINT `tags_used_ibfk_1` FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
