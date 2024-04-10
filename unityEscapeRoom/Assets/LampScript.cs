using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;

public class LampScript : MonoBehaviour
{
    public Material newMaterial;
    private Material oldMaterial;
    private LeverScript lever;
    // Start is called before the first frame update
    void Start()
    {
        lever = FindObjectOfType<LeverScript>();
        oldMaterial = GetComponent<MeshRenderer>().material;
    }

    // Update is called once per frame
    void Update()
    {
        if(lever.flipped){
            GetComponent<MeshRenderer>().material = newMaterial;
        }
        else{
            GetComponent<MeshRenderer>().material = oldMaterial;
        }
    }
}
