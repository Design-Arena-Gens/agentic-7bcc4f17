"use client";

import Card from "@/components/ui/card";
import Progress from "@/components/ui/progress";
import Button from "@/components/ui/button";
import { useState } from "react";

const courses = [
  { id: 1, title: "??????? ???????", category: "?????", progress: 60 },
  { id: 2, title: "????? ???????", category: "?????", progress: 35 },
  { id: 3, title: "????? ?????", category: "???????", progress: 80 },
];

export default function EducationPage() {
  const [activePath, setActivePath] = useState("????? ??????");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">??????? ????????</h1>
        <p className="text-muted-foreground mt-1">???? ??? ????? ??????? ????? ???????.</p>
      </div>

      <section className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h3 className="font-semibold mb-4">???????</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {courses.map(c => (
              <div key={c.id} className="card p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{c.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{c.category}</div>
                  </div>
                  <span className="text-sm">{c.progress}%</span>
                </div>
                <div className="mt-3"><Progress value={c.progress} /></div>
                <div className="mt-3"><Button variant="secondary" size="sm">??????</Button></div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="font-semibold mb-4">?????? ??????</h3>
          <div className="text-sm text-muted-foreground">{activePath}</div>
          <div className="mt-3"><Progress value={42} /></div>
          <div className="mt-4 flex gap-2">
            <Button size="sm" onClick={()=>setActivePath("??????? ??? ????? ??????")}>?????? ???? ???</Button>
            <Button size="sm" variant="secondary" onClick={()=>setActivePath("???? ????? ????? ???????")}>?????? ????</Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
