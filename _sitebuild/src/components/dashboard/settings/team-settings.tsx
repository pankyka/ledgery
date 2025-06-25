"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Mail } from "lucide-react"

// Mock data
const teamMembers = [
  {
    id: 1,
    name: "Kovács János",
    email: "janos.kovacs@email.com",
    role: "Admin",
    status: "Aktív",
    joinedAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Nagy Anna",
    email: "anna.nagy@email.com",
    role: "Szerkesztő",
    status: "Aktív",
    joinedAt: "2024-02-20",
  },
  {
    id: 3,
    name: "Szabó Péter",
    email: "peter.szabo@email.com",
    role: "Megtekintő",
    status: "Meghívva",
    joinedAt: "2024-03-10",
  },
]

export function TeamSettings() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Mock invite process
    setTimeout(() => {
      setIsLoading(false)
      setEmail("")
      alert(`Meghívó elküldve: ${email}`)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Csapattag meghívása</CardTitle>
          <CardDescription>Hívjon meg új tagokat a csapatba email cím alapján</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleInvite} className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="inviteEmail" className="sr-only">
                Email cím
              </Label>
              <Input
                id="inviteEmail"
                type="email"
                placeholder="kollegak@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              <Mail className="mr-2 h-4 w-4" />
              {isLoading ? "Küldés..." : "Meghívás"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Csapat tagok</CardTitle>
          <CardDescription>Kezelje csapata tagjait és jogosultságaikat</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Név</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Szerepkör</TableHead>
                <TableHead>Állapot</TableHead>
                <TableHead>Csatlakozott</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>
                    <Badge variant={member.status === "Aktív" ? "default" : "secondary"}>{member.status}</Badge>
                  </TableCell>
                  <TableCell>{member.joinedAt}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Szerepkör módosítása</DropdownMenuItem>
                        <DropdownMenuItem>Meghívó újraküldése</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Eltávolítás</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
