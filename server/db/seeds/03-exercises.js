exports.seed = function(knex, Promise) {
  return knex("exercises")
    .del()
    .then(function() {
      return Promise.all([
        knex("exercises").insert({
          id: 1,
          name: "Arms-High Partial Situp",
          muscle_group_id: 1,
          descr: `Main Muscle Worked: Abdominals \n 
          Lie on your back, knees bent at 90 degrees, and raise your arms straight overhead, keeping them pointing up throughout the exercise. Sit up halfway, then steadily return to the floor. That’s one rep.`
      }),
      knex("exercises").insert({
          id: 2,
          name: "Barbell Rollout",
          muscle_group_id: 1,
          descr: `Main Muscle Worked: Abdominals \n
          Load the barbell with 10-pound plates and kneel on the floor behind it. Your shoulders should be over the bar. Brace yourabs and roll the bar forward, reaching in front of you until you feel your hips are about to sag. Roll yourself back`
      }),
      knex("exercises").insert({
          id: 3,
          name: "Barbell Russian Twist",
          muscle_group_id: 1,
          descr: `Main Muscle Worked: Abdominals \n 
          Grasp the barbell near the very end again with both hands. Stand with feet at shoulder width. Swing the bar to your left, pivoting your feet as needed, then swing to your right`
      }),
      knex("exercises").insert({
          id: 4,
          name: "Swiss Ball Crunch",
          muscle_group_id: 1,
          descr: `Main Muscle Worked: Abdominals \n 
          Lie back on the Swiss ball with feet shoulder-width apart on the floor. Your lower back should be supported by the ball. Place your hands behind your ears and tuck your chin. Curl your body up off the ball until you’re sitting up.`
      }),
      knex("exercises").insert({
          id: 5,
          name: "Dip/Leg Raise Combo",
          muscle_group_id: 1,
          descr: `Main Muscle Worked: Abdominals \n 
          Suspend yourself over the parallel bars at a dip station. Bend your knees slightly and raise your legs in front of you until they’re parallel to the floor.`
      }),
      knex("exercises").insert({
          id: 6,
          name: "Flutter Kick",
          muscle_group_id: 1,
          descr: `Main Muscle Worked: Abdominals \n 
          Lie on your back with legs straight and arms extend out at your sides. Lift your heels about 6 inches off the floor and rapidly kick your feet up and down in a quick, scissor-like motion.`
      }),
      knex("exercises").insert({
          id: 7,
          name: "Leg Raise",
          muscle_group_id: 1,
          descr: `Main Muscle Worked: Abdominals \n 
          Lie on the floor and hold onto a bench or the legs of a heavy chair for support. Keep your legs straight and raise them up until they’re vertical. Lower back down, but stop just short of the floor to keep tension on your abs before the next rep.`
      }),
      knex("exercises").insert({
          id: 8,
          name: "Medicine Ball Russian Twists",
          muscle_group_id: 1,
          descr: `Main Muscle Worked: Abdominals \n
          Sit on the floor in the top position of a situp and, holding a medicine ball with both hands, extend your arms in front of you. Explosively twist your body to one side and then twist back. Alternate sides.`
      }),
      knex("exercises").insert({
          id: 9,
          name: "Medicine Ball Mountain Climber",
          muscle_group_id: 1,
          descr: `Main Muscle Worked: Abdominals \n
          Hold the med ball with both hands and get into pushup position on the floor. Drive one knee up to your chest, then quickly drive it back while you raise the opposite knee.`
      }),
      knex("exercises").insert({
          id: 10,
          name: "Medicinal Ball Seated Knee Tuck",
          muscle_group_id: 1,
          descr: `Main Muscle Worked: Abdominals \n
          Sit on a bench and squeeze the medicine ball between your feet. Extend and elevate your legs out in front of you and extend your torso so that your body forms a straight line. Hold on to the bench for support. Crunch your torso forward and bring your knees to your chest.`
      }),
      knex("exercises").insert({
          id: 11,
          name: "Fat-Grip Hammer Curl",
          muscle_group_id: 2,
          descr: `Main Muscle Worked: Biceps \n
          Select two dumbbells, and wrap towels around each handle to thicken it. Another option is to use rubber-grip sleeves like Fat Gripz or Grip4orce. Keeping your upper arms stationary at your sides and your palms facing up, curl the weights`
      }),
      knex("exercises").insert({
          id: 12,
          name: "Behind-the-Back Cable Curl",
          muscle_group_id: 2,
          descr: `Main Muscle Worked: Biceps \n
          Attach a D-handle to the low pulley of a cable machine, grasp the handle in your left hand, and step forward (away from the machine) until there’s tension on the cable and your arm is drawn slightly behind your body. Stagger your feet so your right leg is in front. Curl the handle but don’t allow your elbow to point forward. Alternate sides.`
      }),
      knex("exercises").insert({
          id: 13,
          name: "Reverse Curl",
          muscle_group_id: 2,
          descr: `Main Muscle Worked: Biceps \n
          Grasp the bar overhand (aka prone grip) at whatever width is comfortable. Keeping your upper arms against your sides, curl the bar.`
      }),
      knex("exercises").insert({
          id: 14,
          name: "Wide-Grip Curl",
          muscle_group_id: 2,
          descr: `Main Muscle Worked: Biceps \n
          Grasp the bar with hands wider than shoulder-width—if you’re using an Olympic bar, your pinkies should be on the outside knurling. Perform curls.`
      }),
      knex("exercises").insert({
          id: 15,
          name: "Close-Grip Curl",
          muscle_group_id: 2,
          descr: `Main Muscle Worked: Biceps \n
          Curl with your hands inside shoulder-width, in the middle of the bar.`    
      
      }),
      knex("exercises").insert({
          id: 16,
          name: "Barbell Bench Press",
          muscle_group_id: 3,
          descr: `Main Muscle Worked: Chest \n
          Grasp the bar just outside shoulder-width and arch your back so there’s space between your lower back and the bench. Pull the bar out of the rack and lower it to your sternum, tucking your elbows about 45° to your sides. When the bar touches your body, drive your feet hard into the floor and press the bar back up.`
      }),
      knex("exercises").insert({
          id: 17,
          name: "Dumbbell Bench Press",
          muscle_group_id: 3,
          descr: `Main Muscle Worked: Chest \n
          Lie back on a flat bench with a dumbbell in each hand. Hold the weights at shoulder-level, then press the weights straight up.`
      }),
      knex("exercises").insert({
          id: 18,
          name: "Incline Dumbbell Flye",
          muscle_group_id: 3,
          descr: `Main Muscle Worked: Chest \n
          Set an adjustable bench to a 30°-45° angle, and lie back on it with a dumbbell in each hand. Turn your wrists so your palms face each other. Press the weights straight over your chest, then, keeping a slight bend in your elbows, spread your arms open as if you were going for a big bear hug. Lower your arms until you feel a stretch in your pecs, then bring the weights back together over your chest.`
      }),
      knex("exercises").insert({
          id: 19,
          name: "Cable Crossover",
          muscle_group_id: 3,
          descr: `Main Muscle Worked: Chest \n
          Stand between two facing cable stations with both pulleys set midway between the top and bottom of the station. Attach a D-handle to each pulley and hold one in each hand. Keep your elbows slightly bent, and step forward so there’s tension on the cables. Flex your pecs as you bring your hands together out in front of your chest. Alternate stretching and flexing after each set.`
      }),
      knex("exercises").insert({
          id: 20,
          name: "Incline Dumbbell Press",
          muscle_group_id: 3,
          descr: `Main Muscle Worked: Chest \n
          Set an adjustable bench to a 30°-45° angle and lie back on it with a dumbbell in each hand at shoulder-level. Press the weights over your chest.`
      }),
      knex("exercises").insert({
          id: 21,
          name: "Chest Press Machine",
          muscle_group_id: 3,
          descr: `Main Muscle Worked: Chest \n
          Load plates on both sides of a flat-press machine, and adjust the seat so that both of your feet are flat on the floor. Grasp the handles and press to a full lockout.`
      }),
      knex("exercises").insert({
          id: 22,
          name: "BLandmine Press",
          muscle_group_id: 3,
          descr: `Main Muscle Worked: Chest \n
          Wedge the end of the barbell into a corner of the room (to avoid damage to the walls, you may have to wrap a towel around it). Load the opposite end with weight and grasp it toward the end of the barbell sleeve with your right hand. Stagger your stance so your left leg is in front. Press the bar straight overhead`
      }),
      knex("exercises").insert({
          id: 23,
          name: "Pullover",
          muscle_group_id: 3,
          descr: `Main Muscle Worked: Chest \n
          Lie on your back on the floor and hold one dumbbell overhead with both hands. Press the weight over your chest, then reach back over your head, bending your elbows only slightly. Continue until you feel a stretch in your lats, then pull the dumbbell back over your chest. Take a deep breath every time you lower the dumbbell behind you.`
      }),
      knex("exercises").insert({
          id: 24,
          name: "Pushup",
          muscle_group_id: 3,
          descr: `Main Muscle Worked: Chest \n
          Get into pushup position with hands under your shoulders. Your entire body should be straight and your core braced. Lower your body, keeping your elbows tucked near your torso and your head neutral, until your chest is almost touching the floor. Fire your chest and triceps and raise your body back to pushup position.`
      }),
      knex("exercises").insert({
          id: 25,
          name: "Close-Grip Pushup",
          muscle_group_id: 3,
          descr: `Main Muscle Worked: Chest \n
          Perform these as you would normal pushups, but position your hands close together. The closer together your hands are, the more this exercise emphasizes the triceps.`
      }),
      knex("exercises").insert({
          id: 26,
          name: "Deadlift",
          muscle_group_id: 4,
          descr: `Main Muscle Worked: Back \n
          Stand with feet hip-width apart and bend your hips back. Your grip should be just outside of your knees. Keeping a flat black, extend your hips to stand up, and pull the bar up along your body until lock-out, as your hips drive through and your shoulders move back. While pulling, keep your eyes on the ground a few feet in front of you. Carefully lower the bar back to the starting position.`   
      }),
      knex("exercises").insert({
          id: 27,
          name: "Weighted Pullup",
          muscle_group_id: 4,
          descr: `Main Muscle Worked: Back \n
          Attach a weighted belt to your waist, hold a dumbbell between your feet, or—if you can’t complete your reps with weight—use body weight alone. Hang from a pullup bar with your hands just outside shoulder width. Pull yourself up until your chin is over the bar`
      }),
      knex("exercises").insert({
          id: 28,
          name: "Incline Dumbbell Row",
          muscle_group_id: 4,
          descr: `Main Muscle Worked: Back \n
          Set an adjustable bench to a 30- to 45-degree incline and lie on it chest-down. Grasp a dumbbell in each hand and draw your shoulder blades back and together as you row the weights to your sides.`
      }),
      knex("exercises").insert({
          id: 29,
          name: "Chinup",
          muscle_group_id: 4,
          descr: `Main Muscle Worked: Back \n
          Hang from a chinup bar with hands shoulder-width apart using a supinated grip (so, palms facing you). From the bottom of the movement, pull yourself up until your chin is over the bar.`
      }),
      knex("exercises").insert({
          id: 30,
          name: "Inverted Row",
          muscle_group_id: 4,
          descr: `Main Muscle Worked: Back \n
          Set a barbell in a power rack (or use a Smith machine) at about hip height. (About four rungs up should work). Lie underneath it and grab it with hands about shoulder-width apart with the bottom of your heels on floor. Hang from the bar so your body forms a straight line. Squeeze your shoulder blades together and pull yourself up until your back is fully contracted.`
      }),
      knex("exercises").insert({
          id: 31,
          name: "Swiss Ball Leg Curl",
          muscle_group_id: 4,
          descr: `Main Muscle Worked: Back \n
          Lie on your back on the floor and rest your heels on a Swiss ball. Brace your abs, keeping your core in a plank position, and drive your heels into the ball to raise your hips off the floor. Bend your knees and roll the ball toward you. Keep your hips elevated the entire set.`
      }),
      knex("exercises").insert({
          id: 32,
          name: "Wide-Grip Pullup",
          muscle_group_id: 4,
          descr: `Main Muscle Worked: Back \n
          Grab a pullup bar with an overhand grip, wider than outside shoulder width. Hang from the bar and then pull yourself up until your chin is over it.`
      }),
      knex("exercises").insert({
          id: 33,
          name: "Landmine One-Arm Row",
          muscle_group_id: 4,
          descr: `Main Muscle Worked: Back \n
          Place the end of the bar into a corner. (Wrap towels around the end of the bar, or put padding the corner, to avoid damaging the wall and floor.) Facing away from the corner, hold the barbell at the opposite end, above where you load the weights, with your right hand. Stand so your left leg is forward. Keeping your lower back flat, bend at the hips until your torso is slightly above parallel with  the floor. Draw your shoulder blade back and row the bar to your ribs.`
      }),
      knex("exercises").insert({
          id: 34,
          name: "Towel Cable Row",
          muscle_group_id: 4,
          descr: `Main Muscle Worked: Back \n
          Hook a towel to a cable pulley and stand in front of it. Set up to do a row, holding an end of the towel in each hand. Squeeze your shoulder blades together and row the towel to your rib cage.`
      }),
      knex("exercises").insert({
          id: 35,
          name: "Lying Lateral Raise",
          muscle_group_id: 4,
          descr: `Main Muscle Worked: Back \n
          Set an adjustable bench to a 30-degree incline and lie on it chest-down with a dumbbell in each hand. Squeeze your shoulder blades together and raise your arms out 90 degrees to your sides so your palms face down in the top position.`
      }),
      knex("exercises").insert({
          id: 36,
          name: "Barbell Overhead Press",
          muscle_group_id: 5,
          descr: `Main Muscle Worked: Shoulders \n
          Set the bar up in a squat rack or cage, and grasp it just outside shoulder width. Take the bar off the rack and hold it at shoulder level with your forearms perpendicular to the floor. Squeeze the bar and brace your abs. Press the bar overhead, pushing your head forward and shrugging your traps as the bar passes your face.`
      }),
      knex("exercises").insert({
          id: 37,
          name: "Standing Dumbbell Fly",
          muscle_group_id: 5,
          descr: `Main Muscle Worked: Shoulders \n
          Hold a dumbbell in each hand by your sides. Without shrugging, use your upper body to swing the weights up a few inches. Your arms and torso will form an upside down V shape. Think of it as a lateral raise with momentum but without full range of motion.`
      }),
      knex("exercises").insert({
          id: 38,
          name: "High Pull",
          muscle_group_id: 5,
          descr: `Main Muscle Worked: Shoulders \n
          Grasp the bar with hands about double shoulder width and hold it in front of your thighs. Bend your knees and hips so the bar hangs just above your knees. Explosively extend your hips as if jumping and pull the bar up to shoulder level with elbows wide apart, as in an upright row.`
      }),
      knex("exercises").insert({
          id: 39,
          name: "Seated Dumbbell Clean",
          muscle_group_id: 5,
          descr: `Main Muscle Worked: Shoulders \n
          Hold a dumbbell in each hand and sit on the edge of a bench. Keeping your lower back flat, lean forward. Explosively straighten your body and shrug the weights so your arms rise. Allow the momentum to flip your wrists so you catch the weights at shoulder level.`
      }),
      knex("exercises").insert({
          id: 40,
          name: "Dumbbell Neutral Grip Overhead Press",
          muscle_group_id: 5,
          descr: `Main Muscle Worked: Shoulders \n
          Hold a dumbbell in each hand at shoulder level with palms facing each other and elbows pointing forward. Brace your core and press the weights straight overhead. At the top, shrug your shoulders and hold for a second.`
      }),
      knex("exercises").insert({
          id: 41,
          name: "Front Squat",
          muscle_group_id: 6,
          descr: `Main Muscle Worked: legs \n
          Set a barbell on a power rack at about shoulder height. Grab the power with an overhand grip at shoulder width and raise your elbows until your upper arms are parallel to the floor. Take the bar out of the rack and let it rest on your fingertips. Your elbows should be all the way up throughout the movement. Step back and set your feet at shoulder width with toes turned out slightly. Squat as low as you can without losing the arch in your lower back.`
      }),
      knex("exercises").insert({
          id: 42,
          name: "Bulgarian Split Squat",
          muscle_group_id: 6,
          descr: `Main Muscle Worked: Legs \n 
          Stand lunge-length in front of a bench. Hold a dumbbell in each hand and rest the top of your left foot on the bench behind you. Lower your body until your rear knee nearly touches the floor and your front thigh is parallel to the floor.`
      }),
      knex("exercises").insert({
          id: 43,
          name: "Squat",
          muscle_group_id: 6,
          descr: `Main Muscle Worked: Legs \n 
          In a squat rack or cage, grasp the bar as far apart as is comfortable and step under it. Place it on your lower traps, squeeze your shoulder blades together, push your elbows up and nudge the bar out of the rack. Take a step or two back and stand with your feet at shoulder width and your toes turned slightly out. Take a deep breath and bend your hips back, then bend your knees to lower your body as far as you can without losing the arch in your lower back. Push your knees out as you descend. Drive vertically with your hips to come back up, continuing to push your knees out.`
      }),
      knex("exercises").insert({
          id: 44,
          name: "Dumbbell Stepup",
          muscle_group_id: 6,
          descr: `Main Muscle Worked: Legs \n 
          Stand behind a bench or another elevated surface that will put your thigh at parallel to the floor when you step your foot onto it. Hold a dumbbell in each hand and step onto the bench, but leave your trailing leg hanging off.`
      }),
      knex("exercises").insert({
          id: 45,
          name: "Leg Press",
          muscle_group_id: 6,
          descr: `Main Muscle Worked: Legs \n 
          Adjust the seat of the machine so that you can sit comfortably with your hips beneath your knees and your knees in line with your feet. Remove the safeties and lower your knees toward your chest until they’re bent 90 degrees and then press back up. Be careful not to go too low or you risk your lower back coming off the seat (which can cause injury).`
      }),
      knex("exercises").insert({
          id: 46,
          name: "Bodyweight Calf Raise",
          muscle_group_id: 6,
          descr: `Main Muscle Worked: Legs \n 
          Stand with your toes on the block and hold onto something sturdy for support. Raise your heels to come up on the balls of your feet, and then lower your heels until you feel a stretch in your calves. `
      }),
      knex("exercises").insert({
          id: 47,
          name: "Walking Lunge",
          muscle_group_id: 6,
          descr: `Main Muscle Worked: Legs \n 
          Stand with your feet hip width, holding a dumbbell in each hand. Step forward with one leg and lower your body until your rear knee nearly touches the floor and your front thigh is parallel to the floor. Step forward with your rear leg to perform the next rep.`
      }),
      knex("exercises").insert({
          id: 48,
          name: "Reverse Lunge",
          muscle_group_id: 6,
          descr: `Main Muscle Worked: Legs \n 
          Stand with the dumbbells still in your hands and step back with your right foot. Lower your body until your front thigh is parallel to the floor and your rear knee nearly touches the floor. Keep your torso upright. Step forward to return to the starting position. Complete all reps on one leg, then switch legs. That’s one set.`
      }),
      knex("exercises").insert({
          id: 49,
          name: "Kettlebell Swing",
          muscle_group_id: 6,
          descr: `Main Muscle Worked: Legs \n 
          Stand with feet hip-width apart and the kettlebell on the floor. Grasp the weight with both hands (palms facing you) and, keeping your lower back flat, extend your hips to raise it off the floor. From there, take a deep breath and bend your hips back, allowing the weight to swing back between your legs. Explosively extend your hips and exhale—allowing the momentum to swing the weight up to shoulder level. Control the descent, but use the momentum to begin the next rep.`
      }),
      knex("exercises").insert({
          id: 50,
          name: "Jump Squat",
          muscle_group_id: 6,
          descr: `Main Muscle Worked: Legs \n 
          Stand with feet shoulder-width apart and squat down until your thighs are about parallel to the floor but no deeper. Jump as high as you can. Land with soft knees and begin the next rep.`
      }),
      knex("exercises").insert({
          id: 51,
          name: "Decline Triceps Extension",
          muscle_group_id: 7,
          descr: `Main Muscle Worked: Triceps \n
          Set an adjustable bench to a slight decline (around 30°), and lie on it with a dumbbell in each hand. Hold the weights over your chest, palms facing each other. Bend your elbows and lower the weights to the sides of your head. Choose a weight you can do 12 reps with on the first set, and use it for every set.`
      }),
      knex("exercises").insert({
          id: 52,
          name: "Underhand Kickback",
          muscle_group_id: 7,
          descr: `Main Muscle Worked: Triceps \n
          Stand holding a dumbbell in each hand and drop your hips back, lowering your torso until it’s almost parallel to the floor. Turn your palms to face in front of you, and, keeping your upper arms against your sides, extend your elbows until your arms are parallel to your torso.`
      }),
      knex("exercises").insert({
          id: 53,
          name: "Dip",
          muscle_group_id: 7,
          descr: `Main Muscle Worked: Triceps \n
          Use dip bars if available, or place your palms on a bench or chair, and extend your legs in front of you. Lower your body until your upper arms are parallel to the floor but no lower. Extend your elbows to come up.`
      }),
      knex("exercises").insert({
          id: 54,
          name: "Band Triceps Extension",
          muscle_group_id: 7,
          descr: `Main Muscle Worked: Triceps \n
          Attach the band to a sturdy overhead object and grasp the free end (or handles) with both hands. Tuck your elbows to your sides and extend your elbows to lockout.`
      }),
      knex("exercises").insert({
          id: 55,
          name: "Close-Grip Pushup",
          muscle_group_id: 7,
          descr: `Main Muscle Worked: Triceps \n
          Get into pushup position with your hands inside shoulder-width. Keeping your abs braced, lower your body until your chest is just above the floor, then push up. For an advanced workout, use the band for resistance by wrapping it around your back and holding an end in each hand.`
      }),
      ]);
    });
};
 
