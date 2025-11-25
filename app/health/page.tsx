"use client";

import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import Progress from "@/components/ui/progress";
import { notifySuccess } from "@/components/ui/notify";
import { useState } from "react";

export default function HealthPage() {
  const [heartRate, setHeartRate] = useState(74);
  const [bpSys, setBpSys] = useState(118);
  const [bpDia, setBpDia] = useState(76);
  const [sleep, setSleep] = useState(7.2);
  const [calories, setCalories] = useState(1650);

  const save = () => notifySuccess("?? ??? ??????? ?????? ?????");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">????? ????????</h1>
        <p className="text-muted-foreground mt-1">???? ???????? ???????? ????????? ???????? ???????.</p>
      </div>

      <section className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Card>
          <h3 className="font-semibold mb-3">???????? ???????</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between"><span>??? ?????</span><span className="font-semibold">{heartRate} bpm</span></div>
            <Progress value={(heartRate/120)*100} />
            <div className="flex items-center justify-between"><span>??? ????</span><span className="font-semibold">{bpSys}/{bpDia}</span></div>
            <Progress value={(bpSys/140)*100} />
            <div className="flex items-center justify-between"><span>?????</span><span className="font-semibold">{sleep} ?</span></div>
            <Progress value={(sleep/8)*100} />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4 text-sm">
            <input className="card px-3 py-2" type="number" value={heartRate} onChange={e=>setHeartRate(+e.target.value)} aria-label="heart" />
            <input className="card px-3 py-2" type="number" value={bpSys} onChange={e=>setBpSys(+e.target.value)} aria-label="bpSys" />
            <input className="card px-3 py-2" type="number" value={bpDia} onChange={e=>setBpDia(+e.target.value)} aria-label="bpDia" />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-3">??????? ????????</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between"><span>????? ?????</span><span className="font-semibold">{calories} kcal</span></div>
            <Progress value={(calories/2200)*100} />
          </div>
          <div className="mt-4 flex items-center gap-3">
            <input className="card px-3 py-2 w-40 text-sm" type="number" value={calories} onChange={e=>setCalories(+e.target.value)} aria-label="calories" />
            <Button size="sm" onClick={save}>???</Button>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-3">??? ????????</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between">
              <span>?????? ??????</span>
              <span className="text-muted-foreground">30 ?????</span>
            </li>
            <li className="flex items-center justify-between">
              <span>??? ????? ??????</span>
              <span className="text-muted-foreground">20 ?????</span>
            </li>
            <li className="flex items-center justify-between">
              <span>?????? ?????</span>
              <span className="text-muted-foreground">10 ?????</span>
            </li>
          </ul>
          <Button variant="secondary" size="sm" className="mt-4">??? ???? ???????</Button>
        </Card>
      </section>
    </div>
  );
}
