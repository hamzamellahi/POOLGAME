#include<stdio.h>

void diceRool(int dices, int choosen, int *x)
{
	if(dices == 0){
	    *x = *x + 1;
		printf("%d, x => %d \n", choosen, *x);
		return 0;
	}
	for(int i = 1;i<=6;i++){
		// choose
		choosen = choosen * 10 + i;
		dices--;
		// explore
		diceRool(dices, choosen, x);
		// unchoose
		choosen /= 10;
		dices++;
	}
}

int main()
{
	int x = 3;
	int c = 0;
	int ch = 0;
	diceRool(x,ch,&c);
	//printf("%d\n",x);
	return (0);
}
