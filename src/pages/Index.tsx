
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/sonner";
import Editor from "@/components/Editor";
import Preview from "@/components/Preview";

const Index = () => {
  const [htmlCode, setHtmlCode] = useState("<div class='text-center p-4'>\n  <h1 class='text-2xl font-bold'>Hello World</h1>\n  <p>Start editing to see changes!</p>\n</div>");
  const [cssCode, setCssCode] = useState("/* Add your CSS styles here */\n\nbody {\n  font-family: sans-serif;\n  margin: 0;\n  padding: 20px;\n}");
  const [jsCode, setJsCode] = useState("// Add your JavaScript code here\n\nconsole.log('Web Tinker Workbench loaded!');\n");

  const handleRunCode = () => {
    toast.success("Code updated in preview", {
      description: "Your changes have been applied.",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Web Tinker Workbench</h1>
        <p className="text-muted-foreground">A playground for HTML, CSS, and JavaScript experimentation</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Editor</CardTitle>
            <CardDescription>Write and edit your code here</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="html" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="html">HTML</TabsTrigger>
                <TabsTrigger value="css">CSS</TabsTrigger>
                <TabsTrigger value="js">JavaScript</TabsTrigger>
              </TabsList>
              <TabsContent value="html">
                <Editor code={htmlCode} setCode={setHtmlCode} language="html" />
              </TabsContent>
              <TabsContent value="css">
                <Editor code={cssCode} setCode={setCssCode} language="css" />
              </TabsContent>
              <TabsContent value="js">
                <Editor code={jsCode} setCode={setJsCode} language="javascript" />
              </TabsContent>
            </Tabs>
            <div className="mt-4 flex justify-end">
              <Button onClick={handleRunCode}>Run Code</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Preview</CardTitle>
            <CardDescription>See your code in action</CardDescription>
          </CardHeader>
          <CardContent>
            <Preview htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
