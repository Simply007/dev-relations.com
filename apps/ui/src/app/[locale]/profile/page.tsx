import { setRequestLocale } from "next-intl/server"

import { PageProps } from "@/types/next"

import { getAuth } from "@/lib/auth"
import { removeThisWhenYouNeedMe } from "@/lib/general-helpers"
import { Link } from "@/lib/navigation"
import { Button } from "@/components/ui/button"

export default async function ProfilePage({ params }: PageProps) {
  removeThisWhenYouNeedMe("ProfilePage")

  const { locale } = await params
  setRequestLocale(locale)

  const session = await getAuth()

  return (
    <section>
      <div>
        <h1 className="text-xl">
          Hello, <strong>{session?.user.name} ❤️</strong>
        </h1>
        <h2 className="text-lg">Profile information</h2>
        <div className="profile-info">
          <p>
            <strong>Email:</strong> {session?.user.email}
          </p>
        </div>
        <br />
        <Button asChild variant="outline">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </section>
  )
}
