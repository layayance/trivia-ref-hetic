import runGoldenMaster from "jest-golden-master";
import { Game } from ".";

test("A player wins by providing correct answers each time", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    // Mathieu
    game.roll(1);
    game.wasCorrectlyAnswered();
  });
});

test("Players move on a closed board", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");

    game.roll(10);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(5);
    game.wasCorrectlyAnswered();
  });
});

test("place -> category", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(1);
  });
});

test("place -> category", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(2);
  });
});

test("place -> category", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(3);
  });
});

test("place -> category", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(4);
  });
});

test("place -> category", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(5);
  });
});

test("place -> category", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(6);
  });
});

test("place -> category", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(7);
  });
});

test("place -> category", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(8);
  });
});

test("place -> category", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(9);
  });
});

test("place -> category", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(10);
  });
});

test("place -> category", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(11);
  });
});

test("place -> category", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(12);
  });
});

test("A player provides a wrong answer ang goes to penalty box", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");

    game.roll(1);
    game.wrongAnswer();

    game.roll(1);
    game.wasCorrectlyAnswered();
  });
});

test("A player provides a wrong answer ang goes to penalty box", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wrongAnswer();
  });
});

test("A player rolls an even number and stays in the penalty box", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");

    game.roll(1);
    game.wrongAnswer();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(2);
  });
});

test("A player rolls an odd number and goes out of the penalty box, but then provides a wrong answer", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");

    game.roll(1);
    game.wrongAnswer();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wrongAnswer();
  });
});

test("A player rolls an odd number and goes out of the penalty box, but then provides a wrong answer", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");

    game.roll(10);
    game.wrongAnswer();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(5);
    game.wrongAnswer();
  });
});
