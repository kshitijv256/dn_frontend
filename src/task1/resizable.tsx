import React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import logo from "../assets/react.svg";

function ResizablePage() {
  return (
    <div className="w-full h-full text-xl font-bold">
      <h1 className="text-3xl font-bold my-4">Resizable Task</h1>
      <PanelGroup direction="vertical">
        <Panel>
          <PanelGroup direction="horizontal">
            <Panel>
              <div className="bg-emerald-200 h-full">
                Container 1
                <img src={logo} className="w-full h-full p-8" alt="" />
              </div>
            </Panel>
            <PanelResizeHandle>
              <div className="bg-gray-700 h-full w-2" />
            </PanelResizeHandle>
            <Panel>
              <div className="bg-fuchsia-200 h-full">
                Container 2
                <img src={logo} className="w-full h-full p-8" alt="" />
              </div>
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelResizeHandle>
          <div className="bg-gray-700 w-full h-2" />
        </PanelResizeHandle>
        <Panel>
          <div className="bg-blue-200 h-full">
            Container 3
            <img src={logo} className="w-full h-full p-8" alt="" />
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default ResizablePage;
