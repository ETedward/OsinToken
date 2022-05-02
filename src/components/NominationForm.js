import React, { useState } from "react";

export function NominationForm(props) {
  return (
    <div>
    <form method="post" action="#">
        <div class="row gtr-uniform">
          <div class="col-6 col-12-xsmall">
            <label for="demo-name">Author</label>
            <input type="text" name="demo-name" id="demo-name" value=""></input>
          </div>
          <div class="col-6 col-12-xsmall">
            <label for="demo-name">Publication</label>
            <input type="text" name="demo-name" id="demo-name" value=""></input>
          </div>
          <div class="col-6 col-12-xsmall">
            <label for="demo-name">Author Wallet Address (if known)</label>
            <input type="text" name="demo-name" id="demo-name" value=""></input>
          </div>
          <div class="col-6 col-12-xsmall">
            <label for="demo-email">Article Link</label>
            <input type="email" name="demo-email" id="demo-email" value=""></input>
          </div>
          <div class="col-12">
            <label for="demo-message">Article Heading</label>
            <textarea name="demo-message" id="demo-message" rows="2"></textarea>
          </div>
          <div class="col-12">
            <ul class="actions">
              <li><input type="submit" value="Submit Nomination" class="primary" /></li>
              <li><input type="reset" value="Reset"></input></li>
            </ul>
          </div>
        </div>
				</form>
        </div>
  );
}
