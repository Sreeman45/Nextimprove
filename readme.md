# Clone repository
git clone https://github.com/Sreeman45/Nextimprove.git
cd Nextimprove

# Build and start containers
docker-compose up --build -d

# View logs
docker-compose logs -f

create customer:
curl --location 'http://localhost:5000/api/customers' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Global Customs",
    "email": "contact@globalcustoms.com",
    "gstin": "GSTIN123456789"
}'

get customer:
curl --location 'http://localhost:5000/api/customers/64a1b2c3d4e5f6a7b8c9d0e1'

update customer:
curl --location --request PUT 'http://localhost:5000/api/customers/64a1b2c3d4e5f6a7b8c9d0e1' \
--header 'Content-Type: application/json' \
--data '{
    "email": "newemail@globalcustoms.com"
}'

delete customer:
curl --location --request DELETE 'http://localhost:5000/api/customers/64a1b2c3d4e5f6a7b8c9d0e1'



create branch:
curl --location 'http://localhost:5000/api/branches' \
--header 'Content-Type: application/json' \
--data '{
    "branch_code": "MUM-001",
    "location": "Mumbai",
    "customer_id": "64a1b2c3d4e5f6a7b8c9d0e1"
}'

get branches:
curl --location 'http://localhost:5000/api/branches?customerId=64a1b2c3d4e5f6a7b8c9d0e1'
 
update branch:
curl --location --request PUT 'http://localhost:5000/api/branches/64a1b2c3d4e5f6a7b8c9d0e2' \
--header 'Content-Type: application/json' \
--data '{
    "location": "Mumbai International"
}'


ERD diagram:
Table customers {
  _id ObjectId
  name string
  email string
  gstin string
  created_at datetime
  updated_at datetime
}

Table branches {
  _id ObjectId
  branch_code string
  location string
  customer_id ObjectId
  created_at datetime
  updated_at datetime
}

Ref: branches.customer_id > customers._id