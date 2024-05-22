const isPrime = (value) => {
  if (value <= 1) return false;
  for (let i = 2; i < value; i++) {
    if (value % i === 0) return false;
  }
  return true;
};

const getBucketWater = (bucket1, bucket2, bucket3, litters) => {
  const countAllBuckets = bucket1 + bucket2 + bucket3;

  let countBucket1 = 0;
  let countBucket2 = 0;
  let countBucket3 = 0;

  if (
    countAllBuckets < 0 ||
    countAllBuckets > 30 ||
    !isPrime(bucket1) ||
    !isPrime(bucket2) ||
    !isPrime(bucket3)
  ) {
    return "Waterbucket capacity is a prime number between 0 to 30 liters";
  } else if (litters < 100 || litters > 10000000) {
    return " capacity does the farmer need to contain between 100 to 10000000 liters";
  }

  while (litters > 0) {
    if (bucket3 <= litters) {
      litters -= bucket3;
      countBucket3 += 1;
    } else if (bucket2 <= litters) {
      litters -= bucket2;
      countBucket2 += 1;
    } else {
      litters -= bucket1;
      countBucket1 += 1;
    }
  }

  return `Bottle 3 = ${countBucket3} bottles, Bottle 2 = ${countBucket2} bottle, Bottle 1 = ${countBucket1} bottle, total = ${
    countBucket1 + countBucket2 + countBucket3
  } bottles`;
};

const bucket1 = 5;
const bucket2 = 7;
const bucket3 = 11;
const litter = 100;

const result = getBucketWater(bucket1, bucket2, bucket3, litter);
console.log(result);
