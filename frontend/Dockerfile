FROM node:18-alpine

WORKDIR /app

# Copy only package.json & package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies inside the container
RUN npm install 

# Copy the rest of the app (excluding node_modules)
COPY . .

EXPOSE 5174

CMD ["npm", "run", "dev"]

