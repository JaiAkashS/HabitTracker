import React, { useState } from "react";
import habitServices from "../services/habitServices";


const initialState = {
  DearDiary: "",
  date: new Date().toISOString().substring(0,10),
  keybrStatus: false,
  keybrTimeSpent: 15,
  learnjavaStatus: false,
  LearnjavaTimeSpent: 15,
  leetcodeStatus: false,
  LeetcodeTimeSpent: 15,
};

const initialStreaks = {
  keybr: 0,
  learnjava: 0,
  leetcode: 0,
};

function HabitForm() {
  const [form, setForm] = useState(initialState);
  const [streaks, setStreaks] = useState(initialStreaks);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStreaks((prev) => ({
      keybr: form.keybrStatus ? prev.keybr + 1 : prev.keybr,
      learnjava: form.learnjavaStatus ? prev.learnjava + 1 : prev.learnjava,
      leetcode: form.leetcodeStatus ? prev.leetcode + 1 : prev.leetcode,
    }));
    await habitServices.create(JSON.stringify(form)).then(
      returnedEntry => {
        setForm(returnedEntry)
      }
    )
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset name="deardiary">
        <legend>Dear Diary</legend>
        <textarea
          name="DearDiary"
          rows={20}
          cols={100}
          placeholder="Type what Happened in the day"
          value={form.DearDiary}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="habittracker">
        <legend>Habit Tracker</legend>
        <div className="habits">
          <img src={"/icons/Keyboard.png"} alt="Typing" />
          <div>
            <label>
              Typing Practise
              <input
                type="checkbox"
                name="keybrStatus"
                checked={form.keybrStatus}
                onChange={handleChange}
              />
            </label>
            <div className="items">
              <span className="streak">Streak: {streaks.keybr}</span>
              <label>
                Minutes
                <input
                  type="range"
                  name="keybrTimeSpent"
                  min="0"
                  max="60"
                  value={form.keybrTimeSpent}
                  step="5"
                  onChange={handleChange}
                />
                <span style={{ marginLeft: 8 }}>{form.keybrTimeSpent} min</span>
              </label>
            </div>
          </div>
        </div>
        <div className="habits">
          <img src={"/icons/monitor.png"} alt="Java" />
          <div>
            <label>
              Learning Java!
              <input
                type="checkbox"
                name="learnjavaStatus"
                checked={form.learnjavaStatus}
                onChange={handleChange}
              />
            </label>
            <div className="items">
              <span className="streak">Streak: {streaks.learnjava}</span>
              <label>
                Minutes
                <input
                  type="range"
                  name="LearnjavaTimeSpent"
                  min="0"
                  max="60"
                  value={form.LearnjavaTimeSpent}
                  step="5"
                  onChange={handleChange}
                />
                <span style={{ marginLeft: 8 }}>{form.LearnjavaTimeSpent} min</span>
              </label>
            </div>
          </div>
        </div>
        <div className="habits">
          <img src={"/icons/leetcode.png"} alt="Leetcode" />
          <div>
            <label>
              Leetcode!
              <input
                type="checkbox"
                name="leetcodeStatus"
                checked={form.leetcodeStatus}
                onChange={handleChange}
              />
            </label>
            <div className="items">
              <span className="streak">Streak: {streaks.leetcode}</span>
              <label>
                Minutes
                <input
                  type="range"
                  name="LeetcodeTimeSpent"
                  min="0"
                  max="60"
                  value={form.LeetcodeTimeSpent}
                  step="5"
                  onChange={handleChange}
                />
                <span style={{ marginLeft: 8 }}>{form.LeetcodeTimeSpent} min</span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </fieldset>
    </form>
  )
}

export default HabitForm;