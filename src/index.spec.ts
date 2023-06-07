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
