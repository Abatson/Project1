const dev = {
    ersContext: 'http://localhost:3000'
  }
  
  const prod = {
    ersContext: 'http://ec2-18-222-173-186.us-east-2.compute.amazonaws.com:3000'
  }
  
  export let environment = prod;
  
  if (process.env.NODE_ENV === 'production') {
    environment = prod;
  }