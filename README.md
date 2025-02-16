# NAT-finishing
final project on full stack web development
# NAT Finishing Co. Project

## Project Overview
This project is a full-stack web application for NAT Finishing Co., which includes features for managing projects, services, testimonials, and customer inquiries.

## Technologies Used
- **Frontend:** React, Axios, CSS
- **Backend:** Node.js, Express, PostgreSQL

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js
- PostgreSQL
- Git

## Getting Started

### 1. Clone the Repository

git clone <https://github.com/Natnael224/NAT-finishing>
cd <NAT-finishing>

### 2. Set Up the Backend

cd backend
npm install

### 3. Configure Environment Variables

DB_USER=<your_database_user>
DB_PASSWORD=<your_database_password>
DB_HOST=localhost
DB_PORT=5432
DB_NAME=nat_finishing_co

### 4. Create the Database

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Services Table
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Testimonials Table
CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    feedback TEXT NOT NULL,
    rating INTEGER CHECK (rating BETWEEN 1 AND 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Inquiries Table
CREATE TABLE inquiries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

### 5. Start the Backend Server

npm start

### 6. Set Up the Frontend

cd frontend
npm install

### 7. Configure Environment Variables (this time for frontend)

REACT_APP_API_BASE_URL=http://localhost:3000
REACT_APP_JOKE_API_URL=https://official-joke-api.appspot.com/random_joke

### 8. Start the Frontend Development Server

npm start

## Usage
Open your browser and navigate to http://localhost:3000.

You should see the NAT Finishing Co. web application.

Use the contact form to submit inquiries and verify that they are saved in the database.

## Additional Notes
Ensure your PostgreSQL server is running before starting the backend server.

Make sure the backend and frontend servers are running concurrently.

## Troubleshooting
If you encounter any issues, check the console logs for error messages.

Ensure your database credentials are correct in the .env file.

## Table input data for database

### Projects

[
    {
        "id": 1,
        "project_name": "Modern Living Room",
        "start_date": "2024-04-30T21:00:00.000Z",
        "end_date": "2024-07-31T21:00:00.000Z",
        "budget": "30000.00",
        "description": "Design and finishing of a modern living room featuring sleek furniture, contemporary lighting, and stylish decor to create a welcoming and sophisticated space.",
        "image_url": "https://cdn.decorilla.com/online-decorating/wp-content/uploads/2018/10/modern-living-room-neutral-walls.jpg",
        "created_at": "2025-02-02T09:17:54.091Z",
        "updated_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "id": 2,
        "project_name": "Modern Bedroom",
        "start_date": "2024-05-31T21:00:00.000Z",
        "end_date": "2024-08-31T21:00:00.000Z",
        "budget": "25000.00",
        "description": "Complete renovation and finishing of a modern bedroom with minimalistic design, custom-built wardrobes, and serene color schemes to create a comfortable and tranquil retreat.",
        "image_url": "https://th.bing.com/th/id/OIP.ckJxwhk5DdnbP7bN7EqtWgHaHT?rs=1&pid=ImgDetMain",
        "created_at": "2025-02-02T09:17:54.091Z",
        "updated_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "id": 3,
        "project_name": "Elegant Kitchen",
        "start_date": "2024-06-30T21:00:00.000Z",
        "end_date": "2024-09-30T21:00:00.000Z",
        "budget": "35000.00",
        "description": "High-end kitchen renovation featuring custom cabinetry, state-of-the-art appliances, and luxurious countertops to create a functional and elegant cooking space.",
        "image_url": "https://www.architectureartdesigns.com/wp-content/uploads/2014/09/15-Sleek-and-Elegant-Modern-Kitchen-Designs-8.jpg",
        "created_at": "2025-02-02T09:17:54.091Z",
        "updated_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "id": 4,
        "project_name": "Modern Office",
        "start_date": "2024-07-31T21:00:00.000Z",
        "end_date": "2024-10-31T21:00:00.000Z",
        "budget": "40000.00",
        "description": "Interior design and finishing of a modern office space with ergonomic furniture, advanced technology integration, and contemporary aesthetics to enhance productivity and comfort.",
        "image_url": "https://th.bing.com/th/id/R.6eb2ace5fa3b87636ea6d0d6a6706e16?rik=rA9hTdNeKeZ%2bPA&pid=ImgRaw&r=0",
        "created_at": "2025-02-02T09:17:54.091Z",
        "updated_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "id": 5,
        "project_name": "Jewelry Shop",
        "start_date": "2024-08-31T21:00:00.000Z",
        "end_date": "2024-11-30T21:00:00.000Z",
        "budget": "45000.00",
        "description": "Design and finishing of a luxurious jewelry shop featuring custom display cases, elegant lighting, and sophisticated decor to create an inviting and upscale shopping experience.",
        "image_url": "https://th.bing.com/th/id/OIP.vcVgLdnCW0VHHRoNJ6X-0QHaFj?rs=1&pid=ImgDetMain",
        "created_at": "2025-02-02T09:17:54.091Z",
        "updated_at": "2025-02-02T09:17:54.091Z"
    }
]

### Services

[
    {
        "id": 1,
        "service_name": "Interior Painting",
        "price": "2500.00",
        "description": "Professional interior painting services using high-quality paints.",
        "image_url": "https://www.lionsgatepaint.com/wp-content/uploads/2020/03/FH07FEB_475_52_101-interior-painting-tips-cotton-drop-cloth-980x980.jpg",
        "created_at": "2025-02-02T09:17:54.091Z",
        "updated_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "id": 2,
        "service_name": "Wallpaper Installation",
        "price": "1800.00",
        "description": "Installation of wallpaper with a variety of styles and textures.",
        "image_url": "https://th.bing.com/th/id/OIP.Y3fbOFXOoByAWkn3CHYPygHaE8?rs=1&pid=ImgDetMain",
        "created_at": "2025-02-02T09:17:54.091Z",
        "updated_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "id": 3,
        "service_name": "Hardwood Floor Installation",
        "price": "4000.00",
        "description": "Installation of various types of hardwood flooring.",
        "image_url": "https://th.bing.com/th/id/R.824d8ba5d7aa43d77464f1579677830c?rik=oHCeBBzpqMLi3Q&pid=ImgRaw&r=0",
        "created_at": "2025-02-02T09:17:54.091Z",
        "updated_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "id": 4,
        "service_name": "Tile and Stone Flooring",
        "price": "3500.00",
        "description": "Expert installation of tile and stone flooring for durability and style.",
        "image_url": "https://th.bing.com/th/id/R.7e4a6d26ef5fc6169ab3817d96219c55?rik=RORG0xi%2fCbJZKw&pid=ImgRaw&r=0",
        "created_at": "2025-02-02T09:17:54.091Z",
        "updated_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "id": 5,
        "service_name": "Custom Furniture Design",
        "price": "6000.00",
        "description": "Design and creation of custom furniture pieces tailored to client specifications.",
        "image_url": "https://th.bing.com/th/id/OIP.rejix_OOl1t9y31-xZLXugHaE8?rs=1&pid=ImgDetMain",
        "created_at": "2025-02-02T09:17:54.091Z",
        "updated_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "id": 6,
        "service_name": "Ambient Lighting Design",
        "price": "1500.00",
        "description": "Design and installation of ambient lighting solutions for cozy atmospheres.",
        "image_url": "https://th.bing.com/th/id/R.7c870072c19b1834c09ab16655502e30?rik=WLSaPmEXoUGeRw&pid=ImgRaw&r=0&sres=1&sresct=1",
        "created_at": "2025-02-02T09:17:54.091Z",
        "updated_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "id": 7,
        "service_name": "Kitchen Cabinet Refacing",
        "price": "5000.00",
        "description": "Refacing of kitchen cabinets for a refreshed and updated look.",
        "image_url": "https://th.bing.com/th/id/OIP.F-AaaD0XGC_y5_t64pq9_AHaFj?rs=1&pid=ImgDetMain",
        "created_at": "2025-02-02T09:17:54.091Z",
        "updated_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "id": 8,
        "service_name": "Bathroom Tile Work",
        "price": "3000.00",
        "description": "Professional installation of bathroom tiles for a modern and clean finish.",
        "image_url": "https://www.familyhandyman.com/wp-content/uploads/2018/02/FH13MAR_536_52_020.jpg",
        "created_at": "2025-02-02T09:17:54.091Z",
        "updated_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "id": 9,
        "service_name": "Color Consultation",
        "price": "1000.00",
        "description": "Expert advice on color schemes and combinations for interior spaces.",
        "image_url": "https://th.bing.com/th/id/R.11dc7774b0273a9e09b5406bf089be27?rik=R9pIK9JCQa%2bXLg&pid=ImgRaw&r=0",
        "created_at": "2025-02-02T09:17:54.091Z",
        "updated_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "id": 10,
        "service_name": "Project Management",
        "price": "3500.00",
        "description": "Comprehensive project management services to ensure smooth execution.",
        "image_url": "https://th.bing.com/th/id/OIP.WRFTxJBuJ6ImlM2siWVL5wHaFQ?rs=1&pid=ImgDetMain",
        "created_at": "2025-02-02T09:17:54.091Z",
        "updated_at": "2025-02-02T09:17:54.091Z"
    }
]

### Testimonials

[
    {
        "testimonial_id": 1,
        "customer_name": "Hana Gebre",
        "feedback": "NAT did an exceptional job with our living room renovation. The team's attention to detail and professionalism were outstanding. We are beyond thrilled with the results and highly recommend their services!",
        "rating": 5,
        "created_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "testimonial_id": 2,
        "customer_name": "Kebede Alemu",
        "feedback": "I couldn't be happier with the custom furniture designed by NAT. The craftsmanship and quality exceeded my expectations. The team was also very responsive and attentive to my needs. Five stars!",
        "rating": 5,
        "created_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "testimonial_id": 3,
        "customer_name": "Lily Mekonnen",
        "feedback": "The interior painting done by NAT transformed our home completely. The colors and finish are perfect. The team was punctual, efficient, and very courteous throughout the process. Highly recommend!",
        "rating": 5,
        "created_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "testimonial_id": 4,
        "customer_name": "Tesfaye Bekele",
        "feedback": "NAT provided excellent service for our office interior design project. The final result was both functional and visually stunning. Their expertise and commitment to quality truly shone through. We are very pleased!",
        "rating": 5,
        "created_at": "2025-02-02T09:17:54.091Z"
    },
    {
        "testimonial_id": 5,
        "customer_name": "Sofia Fekadu",
        "feedback": "Working with NAT was a fantastic experience. They remodeled our kitchen, and it now looks elegant and modern. The team was professional, friendly, and delivered everything on time. I would definitely hire them again!",
        "rating": 5,
        "created_at": "2025-02-02T09:17:54.091Z"
    }
]

### Inquiries

from the form