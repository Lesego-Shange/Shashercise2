let state = 'idle';
let user = null;

// Only allowed to change below

const checkUser = () => {
  if (user && state === 'requesting') {
    console.log(`User: ${user} (${calculated})`);
  }
  return { user, calculated };
}


// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
