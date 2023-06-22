import TRAITS from '../TRAITS'
import './Terminal.css'

export default function Terminal() {
  return <div className='terminal'>

    {'\n\n\n\n'}
    {'> 888b     d888 8888888b.        8888888b.   .d88888b.  888888b.    .d88888b.  88888888888\n'}
    {'> 8888b   d8888 888   Y88b       888   Y88b d88P" "Y88b 888  "88b  d88P" "Y88b     888\n'}
    {'> 88888b.d88888 888    888       888    888 888     888 888  .88P  888     888     888\n'}
    {'> 888Y88888P888 888   d88P       888   d88P 888     888 8888888K.  888     888     888\n'}
    {'> 888 Y888P 888 8888888P"        8888888P"  888     888 888  "Y88b 888     888     888\n'}
    {'> 888  Y8P  888 888 T88b         888 T88b   888     888 888    888 888     888     888\n'}
    {'> 888   "   888 888  T88b        888  T88b  Y88b. .d88P 888   d88P Y88b. .d88P     888\n'}
    {'> 888       888 888   T88b       888   T88b  "Y88888P"  8888888P"   "Y88888P"      888\n'}
    {'>\n'}
    {'>\n'}
    {'>\n'}
    {'> preparing\n'}
    {'> ...\n'}
    {'> ....\n'}
    {'> .....\n'}
    {'> complete\n'}
    {'>\n'}
    {'> } ---  fsociety  --- {\n'}
    {'> } ---   is now   --- {\n'}
    {'> } --- intialised --- {\n'}
    {'>\n'}
    {'>\n'}
    {'>\n'}
    {'> elliot@ecorp-server:~$ ls -al\n'}
    {'> total 3\n'}
    {'> drwx------+ 1 ecorp staff 20480 Apr 18 11:35 .secrets\n'}
    {'> drwx------+ 1 ecorp staff 38174 Jun 19 13:06 passwords.dat\n'}
    {'> drwx------+ 1 ecorp staff 32866 Aug 21 08:53 usernames.dat\n'}
    {'>\n'}
    {'> elliot@ecorp-server:~$ fsociety.sh ./.secrets breach\n'}
    {'> breach in progress ..... %\n'}

  </div>
}

Terminal.artname = "Terminal.";
Terminal.frameColour = "darkgreen";
Terminal.traits = [TRAITS.ONEDIV];