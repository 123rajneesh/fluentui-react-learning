import React, { useState } from "react"
import './App.css';
import { Stack } from '@fluentui/react'
import { MessageBar, MessageBarType } from "@fluentui/react";


function App() {

  return (
    <Stack>
      <Stack horizontalAlign="center">
        <MessageBar>Fluent UI React</MessageBar>
      </Stack>
    </Stack>
  );
}

export default App;
