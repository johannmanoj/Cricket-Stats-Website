import React, { useState } from 'react';


import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./components/ui/select";


const players = [
  { name: 'Abid Mushtaq', team: 'Rajasthan Royals', active: true, marketing: false, avatar: '🧑' },
  { name: 'Ashok Sharma', team: 'Rajasthan Royals', active: true, marketing: false, avatar: '🧑' },
  { name: 'Avesh Khan', team: 'Rajasthan Royals', active: true, marketing: true, avatar: '🧑' },
  { name: 'Dhruv Jurel', team: 'Rajasthan Royals', active: true, marketing: false, avatar: '🧑' },
  { name: 'Donovan Ferreira', team: 'Rajasthan Royals', active: true, marketing: false, avatar: '🧑' },
  { name: 'Jos Buttler', team: 'Rajasthan Royals', active: true, marketing: false, avatar: '🧑' },
  { name: 'Keshav Maharaj', team: 'Rajasthan Royals', active: true, marketing: false, avatar: '🧑' },
  { name: 'Kuldeep Sen', team: 'Rajasthan Royals', active: true, marketing: false, avatar: '🧑' },
  { name: 'Kunal Singh Rathore', team: 'Rajasthan Royals', active: true, marketing: false, avatar: '🧑' },
  { name: 'Sanju Samson', team: 'Rajasthan Royals', active: true, marketing: false, avatar: '🧑' },
];

export default function PlayersTable() {
  const [search, setSearch] = useState('');

  const filteredPlayers = players.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-blue-950 min-h-screen text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Players</h1>
        <Button className="bg-blue-600">Add Note</Button>
      </div>

      <div className="flex gap-4 mb-4">
        <Input placeholder="Search Name" value={search} onChange={(e) => setSearch(e.target.value)} />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="india">India</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Team" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rajasthan">Rajasthan Royals</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardContent className="overflow-x-auto p-0">
          <table className="w-full text-left">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Team</th>
                <th className="p-3">Active</th>
                <th className="p-3">Marketing</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlayers.map((player, index) => (
                <tr key={index} className="border-b border-blue-700 hover:bg-blue-900">
                  <td className="p-3 flex items-center gap-2">{player.avatar} {player.name}</td>
                  <td className="p-3">{player.team}</td>
                  <td className="p-3">{player.active ? 'Yes' : 'No'}</td>
                  <td className="p-3">{player.marketing ? 'Yes' : 'No'}</td>
                  <td className="p-3">
                    <Button size="sm" className="bg-blue-600">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center mt-4">
        <p>Showing 10 of {players.length}</p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">1</Button>
          <p>of 1</p>
        </div>
      </div>
    </div>
  );
}
