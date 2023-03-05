import React from "react";
import { Button } from "reactstrap";

function CreateButton(props) {
  return (
    <div>
      <Button color="primary" className="btn-create">
        Create Movie
      </Button>
    </div>
  );
}

export default CreateButton;
