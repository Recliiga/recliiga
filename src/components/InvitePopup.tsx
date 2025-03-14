
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Copy, Send, AlertCircle, CheckCircle, Info } from 'lucide-react'
import { Label } from "@/components/ui/label"

export default function InvitePopup() {
  const [inviteLink, setInviteLink] = useState("https://recliiga.com/invite/abc123")
  const [email, setEmail] = useState("")
  const [invitedEmails, setInvitedEmails] = useState<string[]>([])
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(true)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSendInvite = () => {
    if (email && !invitedEmails.includes(email)) {
      setInvitedEmails([...invitedEmails, email])
      setEmail("")
      setError(null)
      // In a real application, you would send an API request here to invite the user
    } else if (invitedEmails.includes(email)) {
      setError("This email has already been invited.")
    } else {
      setError("Please enter a valid email address.")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="space-y-4">
          <div className="flex justify-center">
            <span className="text-4xl font-bold text-[#FF7A00]">REC LiiGA</span>
          </div>
          <DialogTitle className="text-2xl font-semibold text-center text-gray-800">Share Invite Link</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <Alert className="bg-[#FF7A00]/10 border-[#FF7A00] text-[#FF7A00]">
            <Info className="h-4 w-4 mr-2" />
            <AlertDescription>
              This invite link will expire in 7 days. Share it with your team members soon!
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <Label htmlFor="invite-link" className="text-sm text-gray-700">Shareable Invite Link</Label>
            <div className="flex space-x-2">
              <Input
                id="invite-link"
                value={inviteLink}
                readOnly
                className="flex-grow"
              />
              <Button onClick={handleCopyLink} className="bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white">
                <Copy className="h-4 w-4 mr-2" />
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email-invite" className="text-sm text-gray-700">Invite by Email</Label>
            <div className="flex space-x-2">
              <Input
                id="email-invite"
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow"
              />
              <Button onClick={handleSendInvite} className="bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white">
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </div>
          
          {error && (
            <Alert variant="destructive" className="border-0 bg-transparent p-0">
              <div className="flex items-center">
                <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                <AlertDescription className="text-red-600">{error}</AlertDescription>
              </div>
            </Alert>
          )}
          
          {invitedEmails.length > 0 && (
            <div className="space-y-2">
              <Label className="text-sm text-gray-700">Invited Members</Label>
              <ul className="text-sm space-y-1 text-[#707B81]">
                {invitedEmails.map((email, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {email}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
