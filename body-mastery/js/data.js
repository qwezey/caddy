export const levels = {
  accumulation: {
    label: "Accumulation (Weeks 1-4)",
    summary: "Base volume, perfect form, stop with 2 reps (or ~5s) in reserve.",
  },
  intensification: {
    label: "Intensification (Weeks 5-8)",
    summary:
      "Increase leverage or load slightly and extend holds by 5-10s when strong.",
  },
  peak: {
    label: "Peak (Weeks 9-11)",
    summary: "Test harder progressions; RIR 0-1 while maintaining form.",
  },
  deload: {
    label: "Deload (Week 12)",
    summary: "Cut volume by ~50%, use easier variations, and move perfectly.",
  },
};

export const workouts = {
  1: {
    title: "Day 1: Straight Arm Strength",
    subtitle: "Statics and connective tissue",
    type: "static",
    description: "Isometric holds, scapular control, and core compression.",
    exercises: [
      {
        name: "Warmup (10m)",
        notes: "Wrist prep, shoulder dislocates, skin the cat",
        alternatives: [
          {
            name: "Prone Stick Dislocates",
            sets: "3",
            reps: "10-12",
            detail:
              "Lie face down holding a stick or towel wide. Lift arms off floor, pass over head to lower back (or as far as possible) without bending elbows, then return. Keep glutes squeezed.",
          },
        ],
        detail:
          "Wrist prep:\n• Wrist Shakes: Vigorously shaking the hands for 15–30s to stimulate blood flow.\n• Finger pulses: palms flat, lift heels of hands an inch while fingers stay down; 10-20 pulses.\n• Palm raises: shift weight forward and lift heel of hand higher for a stronger first-knuckle raise.\n• Dorsal wrist pushups: backs of hands on floor, elbows soft, bend and straighten lightly for 8-12 reps.\n• Lateral rocks: hands flat, gently rock side to side to load radial/ulnar edges without pain.\n• Rear-Facing Pulses: Palms on floor, fingers pointing to knees. Sit back to stretch, pulse forward.\nShoulder dislocates:\n• Band or stick using straight elbows—start wide, move slow.\nSkin the cat:\n• To German hang very slowly and exit with control; stop before any shoulder pinch.",
        levels: {
          accumulation: {
            sets: "—",
            reps: "10m total",
            rest: "—",
            cue: "Move slowly and deliberately. Let the wrist warm up gradually without forcing the range.",
          },
          intensification: {
            sets: "—",
            reps: "10m total",
            rest: "—",
            cue: "Add more repetitions to each drill. Push the wrist range a bit further.",
          },
          peak: {
            sets: "—",
            reps: "12m total",
            rest: "—",
            cue: "Move through the wrist prep faster; prioritize shoulder mobility and hang practice.",
          },
          deload: {
            sets: "—",
            reps: "5-7m total",
            rest: "—",
            cue: "Very light wrist work; focus on relaxation and gentle blood flow.",
          },
        },
      },
      {
        name: "Skill 1: Handstand",
        notes: "Chest-to-wall holds + balance practice",
        detail:
          "Hands shoulder width, fingers spread. Walk feet chest-to-wall, push tall through shoulders, ribs tucked, glutes squeezed. Rebalance: fingertips press for overbalance, heel of hand for underbalance. Exit by carefully stepping one foot down at a time.",
        levels: {
          accumulation: {
            sets: "—",
            reps: "Accumulate 60s total",
            rest: "30-60s between attempts",
            cue: "Break into multiple short holds. Focus on shoulder engagement and neutral ribs.",
          },
          intensification: {
            sets: "—",
            reps: "Accumulate 90s total",
            rest: "45s between attempts",
            cue: "Push for slightly longer holds. Work on freestanding balance practice.",
          },
          peak: {
            sets: "—",
            reps: "Attempt 2-3 freestanding holds",
            rest: "2-3m between freestanding attempts",
            cue: "Test freestanding balance. Hold chest-to-wall as supplemental work.",
          },
          deload: {
            sets: "—",
            reps: "Accumulate 30-40s total",
            rest: "60s between attempts",
            cue: "Very light, relaxed holds. Move mindfully.",
          },
        },
      },
      {
        name: "Skill 2: Planche Lean",
        notes: "Max protraction, hollow body",
        detail:
          "From pushup, lean shoulders forward past wrists with elbows locked and fingers turned out 30-45 degrees. Round upper back in protraction, ribs down, hips tucked (posterior pelvic tilt). Only lean as far as wrists stay pain-free; shake out and reset between attempts. Use parallettes or yoga blocks if wrist extension is limited.",
        levels: {
          accumulation: {
            sets: "4",
            reps: "15-20s holds",
            rest: "90-120s",
            cue: "Find a sustainable lean angle. Perfection in form over depth.",
          },
          intensification: {
            sets: "4",
            reps: "20-30s holds",
            rest: "90s",
            cue: "Gradually increase the forward lean if form is solid.",
          },
          peak: {
            sets: "5",
            reps: "25-35s holds",
            rest: "120-180s",
            cue: "Push toward full bodyweight load. Use protraction cues actively.",
          },
          deload: {
            sets: "3",
            reps: "12-15s holds",
            rest: "2m",
            cue: "Light, controlled leans. Focus on scapular engagement.",
          },
        },
      },
      {
        name: "Skill 3: Front Lever Tuck",
        notes: "Scapular retraction and depression",
        alternatives: [
          {
            name: "Dragon Flags",
            sets: "3-4",
            reps: "5-8",
            detail:
              "Lie on back (floor/bench). Hold something heavy behind head. Raise legs/hips to vertical candle. Lower slowly keeping body straight. Bend knees if needed.",
          },
          {
            name: "Banded Straight-Arm Pulldowns",
            sets: "3-4",
            reps: "10-15",
            detail:
              "Attach band high. Keep arms straight. Pull band down to hips using lats. Pause at bottom.",
          },
        ],
        detail:
          "Hang on bar or rings, set a tight grip, lock elbows. Pull shoulder blades down and back, then tuck knees to chest while keeping shins tucked and back flat. Think of pulling the bar toward your hips to keep elbows straight. If form slips, come down, rest 60-90s, and retry.",
        levels: {
          accumulation: {
            sets: "4",
            reps: "12-15s holds",
            rest: "90s",
            cue: "Keep the tuck tight. Scapular retraction is key; avoid shoulder shrugging.",
          },
          intensification: {
            sets: "4",
            reps: "15-20s holds",
            rest: "90s",
            cue: "Flatten the back progressively. Try advanced tuck if tuck is easy.",
          },
          peak: {
            sets: "5",
            reps: "20-25s holds",
            rest: "120-180s",
            cue: "Attempt advanced tuck (hips open to 90°). Maximum tension.",
          },
          deload: {
            sets: "3",
            reps: "10-12s holds",
            rest: "2m",
            cue: "Relaxed holds. Focus on the movement quality.",
          },
        },
      },
      {
        name: "Core 1: L-Sit",
        notes: "Floor or parallettes",
        detail:
          "Hands beside hips, arms locked, shoulders depressed and pushed down. Lift legs straight together, toes up, quads squeezed. If legs drop, use a tucked L or alternate single-leg extensions. Keep breathing through the hold; avoid shrugging or leaning back.",
        levels: {
          accumulation: {
            sets: "3",
            reps: "Max hold (stop ~5s before failure)",
            rest: "60-90s",
            cue: "Use tucked L if needed. Focus on shoulder depression and rib position.",
          },
          intensification: {
            sets: "3",
            reps: "Near Max (stop ~2-3s before failure)",
            rest: "60-90s",
            cue: "Work toward a full L. One-leg L is an option if struggling.",
          },
          peak: {
            sets: "3-4",
            reps: "Max Effort",
            rest: "90-120s",
            cue: "Push for full L-sit max holds. Breathing is critical.",
          },
          deload: {
            sets: "2",
            reps: "Easy hold (stop ~10s before failure)",
            rest: "2m",
            cue: "Tucked L only. Very comfortable, no strain.",
          },
        },
      },
      {
        name: "Core 2: Hollow Body",
        notes: "Lumbar spine glued to floor",
        detail:
          "Lie on back, press low spine into the floor, then lift shoulders and legs so only low back stays glued. Arms overhead with biceps by ears; keep head neutral. If low back lifts, bend knees or raise legs higher to shorten the lever. Breathe steadily, no hip hinging.",
        levels: {
          accumulation: {
            sets: "3",
            reps: "45-60s",
            rest: "60s",
            cue: "If low back lifts, bend knees or raise legs higher. Steady breathing.",
          },
          intensification: {
            sets: "3",
            reps: "60-75s",
            rest: "60s",
            cue: "Maintain full hollow shape. Progressively lower legs if possible.",
          },
          peak: {
            sets: "3",
            reps: "75-90s",
            rest: "90s",
            cue: "Full hollow with legs as low as possible while maintaining contact.",
          },
          deload: {
            sets: "2",
            reps: "30-45s",
            rest: "90s",
            cue: "Bend knees, relax, easy breathing.",
          },
        },
      },
      {
        name: "Prehab",
        notes: "Dorsal wrist pushups, finger pulses",
        detail:
          "• Dorsal Wrist Pushups:\nPlace backs of hands on floor, fingers facing each other. Keep elbows soft. Lower body slightly then press back up. 8-12 smooth reps. Stop if there is sharp pain.\n• Finger Pulses:\nPalms flat, fingers spread. Lift the heel of the hand while fingers stay glued to floor. 10-20 pulses. Builds knuckle strength for handstand balance.",
        levels: {
          accumulation: {
            sets: "3",
            reps: "8-10 reps each",
            rest: "45s",
            cue: "Perfect the movement pattern. Pain-free only.",
          },
          intensification: {
            sets: "3",
            reps: "10-12 reps each",
            rest: "45s",
            cue: "Add more volume gradually. Maintain control.",
          },
          peak: {
            sets: "3",
            reps: "12-15 reps each",
            rest: "60s",
            cue: "Push volume higher. Full strength range.",
          },
          deload: {
            sets: "2",
            reps: "6-8 reps each",
            rest: "60s",
            cue: "Light and easy. Recovery focus.",
          },
        },
      },
    ],
  },
  2: {
    title: "Day 2: Bent Arm Strength",
    subtitle: "Dynamics and hypertrophy",
    type: "dynamic",
    description: "Explosive pulling, controlled pressing, and unilateral legs.",
    exercises: [
      {
        name: "Warmup (Animal Flow)",
        notes: "2 min Beast, 2 min Crab, repeat",
        detail:
          "Beast: hands under shoulders, knees hover an inch off floor, spine neutral, slow forward/back crawls keeping hips level. Crab: hands behind you fingers forward, hips lifted, chest open; crawl backward/forward to open shoulders and extend wrists. Move continuously; no sharp joint pressure.",
        levels: {
          accumulation: {
            sets: "—",
            reps: "10m total",
            rest: "—",
            cue: "Move smoothly and controlled. Focus on hip and shoulder mobility.",
          },
          intensification: {
            sets: "—",
            reps: "10m total",
            rest: "—",
            cue: "Increase the range of motion. Move with intention.",
          },
          peak: {
            sets: "—",
            reps: "12m total",
            rest: "—",
            cue: "Faster pace. Use this as active neural priming.",
          },
          deload: {
            sets: "—",
            reps: "5-7m total",
            rest: "—",
            cue: "Very relaxed and easy. Gentle movement only.",
          },
        },
      },
      {
        name: "Pull 1: Explosive Pullups",
        notes: "Aim chest-to-bar",
        alternatives: [
          {
            name: "Slider Floor Pulls",
            sets: "4-5",
            reps: "8-10",
            detail:
              "Lie on stomach on a smooth floor with a towel under chest/stomach. Reach forward, grab the floor, and pull your body forward explosively using lats. Push back to reset.",
          },
          {
            name: "Explosive Band Pulldowns",
            sets: "4-5",
            reps: "10-12",
            detail:
              "Anchor a heavy band high. Kneel down. Explosively pull the band to your chest, pause 1s, control the return.",
          },
        ],
        detail:
          "Grip slightly wider than shoulders, set a hollow body. Pull as fast as possible to clavicle or higher, drive elbows down/back. Lower under control in ~2s. Stop before bar speed drops; rest 2-3 minutes between sets for power.",
        levels: {
          accumulation: {
            sets: "5",
            reps: "3",
            rest: "2-3m",
            cue: "Focus on bar speed. Prioritize power over quantity.",
          },
          intensification: {
            sets: "5",
            reps: "3-4",
            rest: "2-3m",
            cue: "Maintain velocity. Pull higher (chest/nipples).",
          },
          peak: {
            sets: "6",
            reps: "4-5",
            rest: "3m",
            cue: "Maximum power output. Every rep counts.",
          },
          deload: {
            sets: "3",
            reps: "2",
            rest: "3m",
            cue: "Easy explosive work. Light weight only.",
          },
        },
      },
      {
        name: "Push 1: Wall HSPU Negative",
        notes: "5s eccentric, reset each rep",
        detail:
          "Kick to wall handstand, hands shoulder width. Lower in ~5s with elbows tracking ~45 degrees; head and hands form a tripod triangle. Lightly touch the floor, step down to reset each rep. Keep ribs tucked and avoid arching into the wall.",
        levels: {
          accumulation: {
            sets: "4",
            reps: "3-5",
            rest: "2m",
            cue: "Slow eccentric. Build shoulder stability.",
          },
          intensification: {
            sets: "4",
            reps: "4-6",
            rest: "2-2.5m",
            cue: "Maintain 5s lower. Perfect the tripod position.",
          },
          peak: {
            sets: "5",
            reps: "5-8",
            rest: "2-3m",
            cue: "Maximum negatives. Build toward pressing strength.",
          },
          deload: {
            sets: "3",
            reps: "2-3",
            rest: "2.5m",
            cue: "Light, easy negatives. Recovery focus.",
          },
        },
      },
      {
        name: "Pull 2: Doorframe/Ring Row",
        notes: "Feet elevated if able",
        alternatives: [
          {
            name: "Under-Table Rows",
            sets: "3-4",
            reps: "10-12",
            detail:
              "Lie under a sturdy table. Grip the edge. Pull chest up to the table underside. Keep body straight like a plank. Bend knees to make it easier.",
          },
        ],
        detail:
          "Grip door jambs or rings, walk feet forward to set difficulty, body in a straight line. Pull chest through hands, squeeze shoulder blades, pause 1s, then lower in 2-3s. Keep hips from sagging and neck neutral.",
        levels: {
          accumulation: {
            sets: "3",
            reps: "10-12",
            rest: "60-90s",
            cue: "Maintain body alignment. Full range of motion.",
          },
          intensification: {
            sets: "3",
            reps: "12-15",
            rest: "60s",
            cue: "Increase reps or angle difficulty. Keep form tight.",
          },
          peak: {
            sets: "4",
            reps: "15-20",
            rest: "90s",
            cue: "Maximize difficulty angle. Higher rep volume.",
          },
          deload: {
            sets: "2",
            reps: "8-10",
            rest: "90s",
            cue: "Easy angle. Light volume only.",
          },
        },
      },
      {
        name: "Push 2: Archer Pushups",
        notes: "Assist arm stays straight",
        detail:
          "Set hands wide. Lower toward one hand while the other arm stays straight and lightly loaded, palm flat. Keep hips and chest square, elbow of working arm tracks about 45 degrees. Press up powerfully, alternate sides, maintain a hollow ribcage.",
        levels: {
          accumulation: {
            sets: "3",
            reps: "8-10/side",
            rest: "90s",
            cue: "Equal weight distribution. Maintain symmetry.",
          },
          intensification: {
            sets: "3",
            reps: "10-12/side",
            rest: "90s",
            cue: "More load on the working arm. Narrow the stance slightly.",
          },
          peak: {
            sets: "4",
            reps: "12-15/side",
            rest: "120s",
            cue: "Maximum working arm load. Drive explosively.",
          },
          deload: {
            sets: "2",
            reps: "6-8/side",
            rest: "2m",
            cue: "Wide stance, light work. Easy reps.",
          },
        },
      },
      {
        name: "Legs 1: Pistol Squats",
        notes: "Use box or assist if needed",
        detail:
          "Stand tall, one leg forward, arms as counterweight. Sit back and down keeping heel flat and knee tracking over toes, chest up. Use a box/bench for depth or a light support for balance. Drive through the mid-foot/heel to stand; avoid collapsing the arch.",
        levels: {
          accumulation: {
            sets: "4",
            reps: "5-8/leg",
            rest: "90-120s",
            cue: "Use full assist if needed. Focus on form and depth.",
          },
          intensification: {
            sets: "4",
            reps: "8-10/leg",
            rest: "90-120s",
            cue: "Reduce assist gradually. Full depth reps.",
          },
          peak: {
            sets: "4-5",
            reps: "10-12/leg",
            rest: "120-180s",
            cue: "Minimal or no assist. Maximum difficulty.",
          },
          deload: {
            sets: "3",
            reps: "5-6/leg",
            rest: "2m",
            cue: "Use assistance. Easy, controlled reps.",
          },
        },
      },
      {
        name: "Legs 2: Nordic Negatives",
        notes: "Anchor feet, very slow lower",
        detail:
          "Kneel with feet anchored under a couch, pads under knees. Hips extended, body straight like a plank. Lower forward as slowly as possible using hamstrings, catch with hands before nose meets floor, give a light push to help the hamstrings pull you back. Keep glutes tight to prevent hip break.",
        levels: {
          accumulation: {
            sets: "3",
            reps: "5-8",
            rest: "2m",
            cue: "4-5s eccentric. Build hamstring strength steadily.",
          },
          intensification: {
            sets: "3",
            reps: "6-10",
            rest: "2-2.5m",
            cue: "5-7s eccentric. Increase time under tension.",
          },
          peak: {
            sets: "4",
            reps: "8-12",
            rest: "2-3m",
            cue: "7-10s eccentric. Maximum hamstring load.",
          },
          deload: {
            sets: "2",
            reps: "4-6",
            rest: "2.5m",
            cue: "3-4s eccentric. Easy recovery work.",
          },
        },
      },
    ],
  },
  3: {
    title: "Day 3: Active Recovery",
    subtitle: "Mobility and flow",
    type: "recovery",
    description: "Gentle movement to restore joints and tissues.",
    activities: [
      {
        name: "30/30 Squat Challenge",
        detail:
          "Accumulate 30 minutes total in a relaxed deep squat across the day. Heels stay down, feet about shoulder width and turned out as needed. Let the spine stay neutral and breathe calmly; shift weight side-to-side to explore hips/ankles. Break into as many small blocks as needed (e.g., 1-3 minutes).",
      },
      {
        name: "Joint Circles",
        detail:
          "Slow controlled circles for neck, shoulders, wrists, hips, knees, ankles. Move pain-free, 5-10 circles each direction. Neck: small nods and turns; Shoulders: arms draw big circles; Wrists: palms down and fists both ways; Hips: hands on hips, trace circles; Knees: gentle bent-knee circles; Ankles: lift heel and roll each direction.",
      },
      {
        name: "Light Flow (Ape/Monkey/Lizard)",
        detail:
          "15 minutes continuous but easy. Ape: deep squat, hands to the side, hop feet over hands. Monkey: hands ahead, hop feet outside hands to switch sides. Lizard: step long, place hands inside front foot, lower hips, switch sides smoothly. Keep nasal breathing and no joint pinching.",
      },
    ],
  },
  4: {
    title: "Day 4: Straight Arm Variation",
    subtitle: "Balance and dynamic mobility",
    type: "static",
    description: "Handstand refinement, balance holds, and shoulder extension.",
    exercises: [
      {
        name: "Warmup (10m)",
        notes: "Wrist prep, shoulder dislocates, skin the cat",
        alternatives: [
          {
            name: "Prone Stick Dislocates",
            sets: "3",
            reps: "10-12",
            detail:
              "Lie face down holding a stick or towel wide. Lift arms off floor, pass over head to lower back (or as far as possible) without bending elbows, then return. Keep glutes squeezed.",
          },
        ],
        detail:
          "Wrist prep:\n• Wrist Shakes: Vigorously shaking the hands for 15–30s to stimulate blood flow.\n• Finger pulses: palms flat, lift heels of hands an inch while fingers stay down; 10-20 pulses.\n• Palm raises: shift weight forward and lift heel of hand higher for a stronger first-knuckle raise.\n• Dorsal wrist pushups: backs of hands on floor, elbows soft, bend and straighten lightly for 8-12 reps.\n• Lateral rocks: hands flat, gently rock side to side to load radial/ulnar edges without pain.\n• Rear-Facing Pulses: Palms on floor, fingers pointing to knees. Sit back to stretch, pulse forward.\nShoulder dislocates:\n• Band or stick using straight elbows—start wide, move slow.\nSkin the cat:\n• To German hang very slowly and exit with control; stop before any shoulder pinch.",
        levels: {
          accumulation: {
            sets: "—",
            reps: "10m total",
            rest: "—",
            cue: "Move slowly and deliberately. Let the wrist warm up gradually without forcing the range.",
          },
          intensification: {
            sets: "—",
            reps: "10m total",
            rest: "—",
            cue: "Add more repetitions to each drill. Push the wrist range a bit further.",
          },
          peak: {
            sets: "—",
            reps: "12m total",
            rest: "—",
            cue: "Move through the wrist prep faster; prioritize shoulder mobility and hang practice.",
          },
          deload: {
            sets: "—",
            reps: "5-7m total",
            rest: "—",
            cue: "Very light wrist work; focus on relaxation and gentle blood flow.",
          },
        },
      },
      {
        name: "Handstand Practice",
        notes: "Kick-ups and freestanding attempts",
        detail:
          "Practice small controlled kick-ups. Stack wrists-shoulders-hips in a straight line, ribs tucked. Use fingertip pressure for overbalance and heel-of-hand for underbalance. Bail by stepping down one leg at a time; avoid falling into the wall.",
        levels: {
          accumulation: {
            sets: "—",
            reps: "10-15m",
            rest: "—",
            cue: "Focus on alignment. Work on balance for 3-5s holds.",
          },
          intensification: {
            sets: "—",
            reps: "12-15m",
            rest: "—",
            cue: "Extend balance attempts. Work toward 10-15s holds.",
          },
          peak: {
            sets: "—",
            reps: "15-20m",
            rest: "—",
            cue: "Push for longer freestanding holds (20-30s+).",
          },
          deload: {
            sets: "—",
            reps: "8-10m",
            rest: "—",
            cue: "Relaxed practice. Short balance attempts only.",
          },
        },
      },
      {
        name: "Frog Stand (Crow)",
        notes: "Balance focus",
        detail:
          "Hands shoulder width, fingers spread. Place knees high on triceps, lean forward until feet float. Keep elbows slightly bent, eyes forward, scapula protracted. Distribute weight through fingers to avoid dumping into wrist extension.",
        levels: {
          accumulation: {
            sets: "4",
            reps: "Max hold",
            rest: "90-120s",
            cue: "Focus on balance. Work on staying up for 10-20s.",
          },
          intensification: {
            sets: "4",
            reps: "Max hold",
            rest: "90s",
            cue: "Extend holds. Target 20-30s.",
          },
          peak: {
            sets: "5",
            reps: "Max hold",
            rest: "120-180s",
            cue: "Push for 30-45s max holds.",
          },
          deload: {
            sets: "3",
            reps: "Max hold",
            rest: "2m",
            cue: "Easy, relaxed holds. 10-15s only.",
          },
        },
      },
      {
        name: "Skin the Cat",
        notes: "Slow through German hang",
        alternatives: [
          {
            name: "Prone Stick Dislocates",
            sets: "3",
            reps: "8-10",
            detail:
              "Lie face down holding a stick/towel. Keep arms straight. Lift over head to lower back and return. Do not arch back - drive from shoulders.",
          },
        ],
        detail:
          "From a dead hang, tuck knees and slowly rotate through shoulders into inverted hang, then lower to German hang only to a comfortable stretch. Pause, then pull back through the inverted position to hang. Keep elbows straight and move with control; stop immediately if you feel sharp anterior shoulder pain.",
        levels: {
          accumulation: {
            sets: "3",
            reps: "3",
            rest: "2m",
            cue: "Slow and controlled. Emphasize the German hang stretch.",
          },
          intensification: {
            sets: "3",
            reps: "3-4",
            rest: "2m",
            cue: "Deeper German hang. Slightly faster tempo.",
          },
          peak: {
            sets: "4",
            reps: "4-5",
            rest: "2-2.5m",
            cue: "Maximum depth in German hang. Challenge the stretch.",
          },
          deload: {
            sets: "2",
            reps: "2",
            rest: "2.5m",
            cue: "Easy, relaxed reps. Light stretch only.",
          },
        },
      },
      {
        name: "Compression Drills",
        notes: "Seated pike pulses",
        detail:
          "Sit tall with legs straight together, toes up. Hands on floor beside knees (or on yoga blocks). Without leaning back, lift both heels off the floor in small pulses, squeezing quads and hip flexors. Keep ribs down and neck long.",
        levels: {
          accumulation: {
            sets: "3",
            reps: "15 pulses",
            rest: "60s",
            cue: "Controlled pulses. Maintain leg extension throughout.",
          },
          intensification: {
            sets: "3",
            reps: "20 pulses",
            rest: "60s",
            cue: "Add more reps. Increase the height of the lift.",
          },
          peak: {
            sets: "4",
            reps: "25 pulses",
            rest: "90s",
            cue: "Maximum volume. Push the burn.",
          },
          deload: {
            sets: "2",
            reps: "10 pulses",
            rest: "90s",
            cue: "Easy, relaxed pulses.",
          },
        },
      },
    ],
  },
  5: {
    title: "Day 5: Bent Arm Variation",
    subtitle: "Maximum strength development",
    type: "dynamic",
    description:
      "Weighted pulling, pseudo planche pressing, and unilateral legs.",
    exercises: [
      {
        name: "Warmup (Animal Flow)",
        notes: "2 min Beast, 2 min Crab, repeat",
        detail:
          "Beast: hands under shoulders, knees hover an inch off floor, spine neutral, slow forward/back crawls keeping hips level. Crab: hands behind you fingers forward, hips lifted, chest open; crawl backward/forward to open shoulders and extend wrists. Move continuously; no sharp joint pressure.",
        levels: {
          accumulation: {
            sets: "—",
            reps: "10m total",
            rest: "—",
            cue: "Move smoothly and controlled. Focus on hip and shoulder mobility.",
          },
          intensification: {
            sets: "—",
            reps: "10m total",
            rest: "—",
            cue: "Increase the range of motion. Move with intention.",
          },
          peak: {
            sets: "—",
            reps: "12m total",
            rest: "—",
            cue: "Faster pace. Use this as active neural priming.",
          },
          deload: {
            sets: "—",
            reps: "5-7m total",
            rest: "—",
            cue: "Very relaxed and easy. Gentle movement only.",
          },
        },
      },
      {
        name: "Pull 1: Weighted Pullups",
        notes: "Backpack load as needed",
        alternatives: [
          {
            name: "Weighted Slider Pulls",
            sets: "4",
            reps: "8-12",
            detail:
              "Wear a heavy backpack. Perform Slider Floor Pulls (pulling body across floor) with the added resistance.",
          },
        ],
        detail:
          "Add weight with a backpack. Set scapula down/back, hollow body. Pull chest to bar (or as high as possible) with a brief pause, then lower in 2-3s. Keep ribs down, elbows drive toward ribs, and chin neutral.",
        levels: {
          accumulation: {
            sets: "3",
            reps: "5-8",
            rest: "2-3m",
            cue: "Light load (+5-10 lbs). Perfect form with weight.",
          },
          intensification: {
            sets: "3",
            reps: "5-8",
            rest: "2-3m",
            cue: "Moderate load (+15-25 lbs). Controlled tempo.",
          },
          peak: {
            sets: "4",
            reps: "3-6",
            rest: "3-4m",
            cue: "Heavy load (+25-40+ lbs). Maximum strength.",
          },
          deload: {
            sets: "2",
            reps: "5-8",
            rest: "3m",
            cue: "Light load (+5 lbs) or bodyweight. Easy reps.",
          },
        },
      },
      {
        name: "Push 1: Pseudo Planche Pushups",
        notes: "Hands near hips, lean forward",
        detail:
          "From plank, walk hands back toward hips and lean shoulders past wrists to feel weight in the hands. Lower chest forward and down with elbows close to ribs, then press out while staying leaned. Keep a hollow body, glutes tight, and legs straight.",
        levels: {
          accumulation: {
            sets: "4",
            reps: "8-10",
            rest: "90-120s",
            cue: "Moderate lean. Focus on form and control.",
          },
          intensification: {
            sets: "4",
            reps: "10-12",
            rest: "90s",
            cue: "Increase lean angle. Full range of motion.",
          },
          peak: {
            sets: "5",
            reps: "12-15",
            rest: "120-180s",
            cue: "Maximum lean toward planche pushup. Deep ROM.",
          },
          deload: {
            sets: "3",
            reps: "6-8",
            rest: "2m",
            cue: "Shallow lean. Easy reps.",
          },
        },
      },
      {
        name: "Pull 2: Towel/Doorknob Rows",
        notes: "Unilateral control",
        alternatives: [
          {
            name: "One-Arm Table Rows",
            sets: "3-4",
            reps: "10-12/arm",
            detail:
              "Same as standard table rows but using one arm. Place feet closer to pivot point to make it feasible.",
          },
        ],
        detail:
          "Loop a strong towel on a sturdy knob/hinge side. Hinge back with a straight body, slight lean. Row with one arm, pulling elbow to ribcage while the other arm balances. Control the lower in 2-3s and avoid twisting through the torso.",
        levels: {
          accumulation: {
            sets: "3",
            reps: "10/arm",
            rest: "90s",
            cue: "Controlled, symmetric rows. Focus on anti-rotation.",
          },
          intensification: {
            sets: "3",
            reps: "12/arm",
            rest: "90s",
            cue: "Increase reps or angle. Maintain stability.",
          },
          peak: {
            sets: "4",
            reps: "15/arm",
            rest: "120s",
            cue: "Maximum difficulty angle. Higher volume.",
          },
          deload: {
            sets: "2",
            reps: "8/arm",
            rest: "2m",
            cue: "Easy angle. Light volume.",
          },
        },
      },
      {
        name: "Push 2: Dips",
        notes: "Chairs or bars",
        alternatives: [
          {
            name: "Bench Dips",
            sets: "3",
            reps: "12-15",
            detail:
              "Hands on a couch or chair behind you. Legs straight out on floor (easiest) or elevated on another chair (harder). Lower hips until shoulders are level with elbows. Keep back close to the bench.",
          },
        ],
        detail:
          "Support tall with elbows locked and shoulders depressed. Lower until shoulders are just below elbows, forearms vertical, slight torso forward. Press to full lockout without shrugging. Use two sturdy chairs or bars; stop short of pain at the front of the shoulder.",
        levels: {
          accumulation: {
            sets: "3",
            reps: "10-15",
            rest: "90-120s",
            cue: "Full range of motion. Control the lower.",
          },
          intensification: {
            sets: "3",
            reps: "12-18",
            rest: "90s",
            cue: "Increase reps. Smooth transitions.",
          },
          peak: {
            sets: "4",
            reps: "15-25",
            rest: "120-180s",
            cue: "Maximum reps. Weighted if possible.",
          },
          deload: {
            sets: "2",
            reps: "8-12",
            rest: "2m",
            cue: "Easy reps. Shallow ROM if needed.",
          },
        },
      },
      {
        name: "Legs: Shrimp Squats",
        notes: "Posterior chain focus",
        detail:
          "Hold the back ankle/foot, stand on one leg. Sit down under control until the rear knee lightly taps the floor (or a pad), then stand without bouncing. Keep chest tall, working knee tracking over toes, and hips square. Use a counterweight if balance is shaky.",
        levels: {
          accumulation: {
            sets: "3",
            reps: "8-10/leg",
            rest: "90-120s",
            cue: "Use counterweight for balance. Full control.",
          },
          intensification: {
            sets: "3",
            reps: "10-12/leg",
            rest: "90-120s",
            cue: "Reduce counterweight. Work toward unassisted.",
          },
          peak: {
            sets: "4",
            reps: "12-15/leg",
            rest: "120-180s",
            cue: "No counterweight. Maximum difficulty.",
          },
          deload: {
            sets: "2",
            reps: "6-8/leg",
            rest: "2m",
            cue: "Light counterweight. Easy reps.",
          },
        },
      },
    ],
  },
  6: {
    title: "Days 6-7: Rest",
    subtitle: "Recovery period",
    type: "rest",
    description: "Sleep, nutrition, optional gentle stretching.",
    isRestDay: true,
  },
};
